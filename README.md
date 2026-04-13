# AI Data Cleaning Copilot Frontend

Production-ready React + Vite frontend for AI Data Cleaning Copilot.

## API Configuration

This app uses only Vite environment variables for backend routing.

1. Copy `.env.example` to `.env.local`.
2. Set:

```env
VITE_API_URL=https://anant-ai-backend.hf.space/api
```

The frontend reads this via `import.meta.env.VITE_API_URL`.

## Local Build

```bash
npm install
npm run build
```

## GitHub Upload (Frontend Only)

Run these commands from this `frontend` folder so only frontend files are pushed:

```bash
git init
git branch -M main
git remote add origin https://github.com/anant-arya-03/nlp.git
git add .
git commit -m "Deploy-ready frontend"
git push -u origin main
```

If the remote already exists, use:

```bash
git remote set-url origin https://github.com/anant-arya-03/nlp.git
```

## Vercel Deployment

This project includes `vercel.json` and can be deployed directly from this folder.

1. Import the GitHub repo in Vercel.
2. Set Root Directory to `frontend` if your repo also contains backend code.
3. Add environment variable:
	1. Key: `VITE_API_URL`
	2. Value: `https://anant-ai-backend.hf.space/api`
4. Deploy.

## Notes

1. `.vercelignore` excludes common backend paths/files from deployment artifacts.
2. API URLs are normalized to avoid malformed endings such as repeated `/api/api`.
