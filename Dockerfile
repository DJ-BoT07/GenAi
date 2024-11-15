# Use Node.js LTS version
FROM node:20.6.1-alpine AS base

# Set working directory
WORKDIR /genai

# Install dependencies
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
FROM base AS builder
COPY --from=deps /genai/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build the application
RUN npm run build

# Production image
FROM base AS runner
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files
COPY --from=builder /genai/public ./public
COPY --from=builder /genai/.next ./.next
COPY --from=builder /genai/node_modules ./node_modules
COPY --from=builder /genai/package.json ./package.json
COPY --from=builder /genai/next.config.mjs ./next.config.mjs
COPY --from=builder /genai/postcss.config.mjs ./postcss.config.mjs
COPY --from=builder /genai/tailwind.config.js ./tailwind.config.js
COPY --from=builder /genai/app ./app
COPY --from=builder /genai/jsconfig.json ./jsconfig.json

# Set the correct permissions
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /genai
USER nextjs

# Expose port
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "dev"]
