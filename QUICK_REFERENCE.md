# 🐾 Schronisko Orzechowce - Quick Reference

## 📋 Access Information

**Public Website:**
- URL: `https://your-project.vercel.app`
- Accessible to everyone
- Shows all available pets for adoption

**Admin Panel:**
- URL: `https://your-project.vercel.app/admin`
- Login: Enter password (set in ADMIN_PASSWORD)
- Default password: `admin123` (CHANGE THIS!)

## 🔑 Environment Variables

### For Local Development (.env)
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx...
ADMIN_PASSWORD=your_secure_password
\`\`\`

### For Vercel (Production)
Add these in: Vercel Dashboard → Settings → Environment Variables
- \`NEXT_PUBLIC_SUPABASE_URL\`
- \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
- \`ADMIN_PASSWORD\`

## 💻 Local Development Commands

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🗄️ Database Schema

**Table: pets**
- id (UUID, Primary Key)
- name (String, Required)
- species (dog | cat | other, Required)
- age (Number, Optional)
- sex (male | female, Optional)
- description (Text, Optional)
- image_url (Text, Optional)
- status (available | adopted | reserved)
- created_at (Timestamp)
- updated_at (Timestamp)

## 🖼️ Quick Image URLs for Testing

**Dogs:**
- https://images.unsplash.com/photo-1543466835-00a7907e9de1
- https://images.unsplash.com/photo-1587300003388-59208cc962cb
- https://images.unsplash.com/photo-1583511655857-d19b40a7a54e

**Cats:**
- https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba
- https://images.unsplash.com/photo-1573865526739-10c1d3a1f0cc
- https://images.unsplash.com/photo-1574158622682-e40e69881006

## 🚀 Deployment Workflow

1. Make changes locally
2. Test with \`npm run dev\`
3. Commit changes:
   \`\`\`bash
   git add .
   git commit -m "Description of changes"
   git push
   \`\`\`
4. Vercel automatically deploys (2-3 minutes)

## 🛠️ Common Admin Tasks

### Add a Pet
1. Go to `/admin`
2. Login with password
3. Click "Dodaj zwierzę"
4. Fill form and save

### Edit a Pet
1. In admin panel, click Edit icon (pencil)
2. Update information
3. Save changes

### Delete a Pet
1. In admin panel, click Delete icon (trash)
2. Confirm deletion

### Change Pet Status
1. Edit the pet
2. Change "Status" dropdown
3. Save

## 📱 Page Structure

\`\`\`
/                       → Public homepage (all available pets)
/admin                  → Admin login/dashboard
/admin/add              → Add new pet form
/admin/edit/[id]        → Edit pet form
\`\`\`

## 🎨 Color Palette (Tailwind)

- Primary: Orange/Red gradient
- Success: Green (available)
- Warning: Yellow (reserved)
- Info: Blue (adopted)

## 📊 File Structure

\`\`\`
Orzechowce/
├── app/
│   ├── admin/           # Admin pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── PetCard.tsx      # Pet display card
│   └── PetGrid.tsx      # Pet grid with filters
├── lib/
│   └── supabase.ts      # Database functions
├── supabase/
│   └── schema.sql       # Database schema
├── public/              # Static files
├── package.json         # Dependencies
├── next.config.js       # Next.js config
├── tailwind.config.js   # Tailwind config
└── vercel.json          # Vercel config
\`\`\`

## 🔧 Troubleshooting Quick Fixes

**Can't see pets:**
\`\`\`bash
# Check Supabase connection
npm run dev
# Open browser console (F12)
# Look for errors
\`\`\`

**Images not loading:**
- Check \`next.config.js\` → \`images.domains\`
- Add your image host domain

**Can't login to admin:**
- Check \`ADMIN_PASSWORD\` in environment
- Clear browser cache (Ctrl+Shift+R)

**Build fails:**
- Check all \`.env\` variables are set
- Run \`npm install\` again
- Check for TypeScript errors

## 📞 Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

## ✅ Pre-Launch Checklist

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Environment variables set
- [ ] GitHub repository created
- [ ] Vercel deployment successful
- [ ] Test: View pets on homepage
- [ ] Test: Login to admin panel
- [ ] Test: Add a new pet
- [ ] Test: Edit existing pet
- [ ] Test: Filter pets (dogs/cats)
- [ ] Change default admin password
- [ ] Add real pet photos
- [ ] Share URL with team

---

**Remember:** Every adoption saves a life! 🐾❤️
