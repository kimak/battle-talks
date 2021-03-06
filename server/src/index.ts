import { GraphQLServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { Prisma, BattleCreateInput } from "./generated/prisma";
import { Context } from "./utils";

const alpha: string[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let codes: string[] = alpha.map((key, index) => {
  if (index < alpha.length - 4) return alpha.slice(index, index + 4).join("");
});
let index = 0;

const resolvers = {
  Query: {
    talk(parent, { id }, context: Context, info) {
      return context.db.query.talk({ where: { id: id } }, info);
    },
    talks(parent, args, context: Context, info) {
      return context.db.query.talks({}, info);
    },
    battles(parent, args, context: Context, info) {
      return context.db.query.battles({}, info);
    },
    feed(parent, args, context: Context, info) {
      return context.db.query.posts({ where: { isPublished: true } }, info);
    },
    drafts(parent, args, context: Context, info) {
      return context.db.query.posts({ where: { isPublished: false } }, info);
    },
    post(parent, { id }, context: Context, info) {
      return context.db.query.post({ where: { id: id } }, info);
    }
  },
  Mutation: {
    async createBattle(parent, { text }, context: Context, info) {
      let talk = await context.db.query.talk({ where: { text: text } }, info);
      if (!talk) {
        talk = await context.db.mutation.createTalk({ data: { text } }, info);
      }
      const code: string = codes[index];
      index++;
      return await context.db.mutation.createBattle(
        {
          data: {
            talk: { connect: { id: talk.id } },
            code: code
          }
        },
        info
      );
    },
    updateBattle(
      parent,
      { id, ready, waiting: waiting, complete },
      context: Context,
      info
    ) {
      return context.db.mutation.updateBattle(
        {
          where: { id },
          data: { ready: ready, waiting, complete }
        },
        info
      );
    },
    createDraft(parent, { title, text }, context: Context, info) {
      return context.db.mutation.createPost({ data: { title, text } }, info);
    },
    deletePost(parent, { id }, context: Context, info) {
      return context.db.mutation.deletePost({ where: { id } }, info);
    },
    publish(parent, { id }, context: Context, info) {
      return context.db.mutation.updatePost(
        {
          where: { id },
          data: { isPublished: true }
        },
        info
      );
    }
  },
  Subscription: {
    battle: {
      subscribe: async (parent, args, context: Context, info) => {
        return context.db.subscription.battle(
          {
            /*
            https://github.com/graphcool/prisma/issues/1734
            where: {
              mutation_in: ["UPDATED"],
              updatedFields_contains: "ready"
            }*/
          },
          info
        );
      }
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      //endpoint: "https://eu1.prisma.sh/public-berryjackal-170/server/dev", // the endpoint of the Prisma DB service
      endpoint: "http://localhost:4466/battle-talks/dev",
      secret: "mysecret123", // specified in database/prisma.yml
      debug: true // log all GraphQL queries & mutations
    })
  })
});

server.start(() => console.log("Server is running on http://localhost:4000"));
