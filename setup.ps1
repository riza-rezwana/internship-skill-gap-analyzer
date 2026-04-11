# =====================================================
# FILE: setup.ps1
# One-click setup script for M2F4 on Windows
# Run this ONCE and everything installs automatically
# =====================================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  M2F4 Skill Matching - Auto Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install packages
Write-Host "[1/4] Installing packages..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm install failed." -ForegroundColor Red
    pause
    exit
}
Write-Host "Packages installed OK" -ForegroundColor Green

# Step 2: Generate Prisma client
Write-Host ""
Write-Host "[2/4] Generating Prisma client..." -ForegroundColor Yellow
npx prisma generate
Write-Host "Prisma client generated OK" -ForegroundColor Green

# Step 3: Push schema to database
Write-Host ""
Write-Host "[3/4] Pushing schema to database..." -ForegroundColor Yellow
npx prisma db push
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Database push failed. Check your .env DATABASE_URL." -ForegroundColor Red
    pause
    exit
}
Write-Host "Database schema pushed OK" -ForegroundColor Green

# Step 4: Seed data
Write-Host ""
Write-Host "[4/4] Loading demo data..." -ForegroundColor Yellow
node seed/matchingSeed.js
Write-Host "Demo data loaded OK" -ForegroundColor Green

# Done
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup complete! Starting server..." -ForegroundColor Cyan
Write-Host "  Open: http://localhost:3000/matching" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start server
npm run dev
