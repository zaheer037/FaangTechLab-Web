#!/bin/bash

# 🚀 FAANG Tech Lab - Quick Netlify Deploy Script
# Run this script to prepare and deploy your site

echo "🚀 FAANG Tech Lab - Netlify Deployment"
echo "======================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check for environment file
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found"
    echo "📋 Please create .env file with:"
    echo "   VITE_GEMINI_API_KEY=your_api_key"
    echo "   VITE_FORMSPREE_ENDPOINT=your_endpoint"
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "🧹 Cleaning previous builds..."
rm -rf dist

echo "📦 Installing dependencies..."
pnpm install

echo "🔨 Building project..."
pnpm build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📂 Built files are in: ./dist"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Go to https://app.netlify.com"
    echo "2. Drag the 'dist' folder to deploy"
    echo "3. Or connect your GitHub repo for automatic deployments"
    echo ""
    echo "🔑 Don't forget to add environment variables in Netlify:"
    echo "   VITE_GEMINI_API_KEY"
    echo "   VITE_FORMSPREE_ENDPOINT"
else
    echo "❌ Build failed! Check the errors above."
    exit 1
fi

echo ""
echo "🎉 Ready for deployment!"
