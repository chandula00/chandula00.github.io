# Adding Your Profile Image

To add your profile picture to the portfolio website:

## Steps:

1. **Prepare your image:**

   - Use a professional photo (headshot or portrait)
   - Recommended size: 500x500 pixels or larger (square format)
   - Supported formats: JPG, PNG, WebP
   - File size: Keep under 500KB for best performance

2. **Add the image to your project:**

   - Place your image file in the `public` folder
   - Rename it to `profile.jpg` (or `profile.png`)
   - The path should be: `public/profile.jpg`

3. **The image is already configured:**

   - The portfolio is already set to look for `/profile.jpg`
   - If no image is found, it will show a colorful placeholder with your initial

4. **Alternative: Use a different filename:**
   If you want to use a different filename, edit `src/data/portfolio.ts`:
   ```typescript
   export const personalInfo = {
     // ... other fields
     image: "/your-image-name.jpg", // Change this to match your filename
   };
   ```

## Tips:

- For best results, use a square image (1:1 aspect ratio)
- The image will be displayed in a rounded square with a border
- High-resolution images will be automatically scaled down
- Consider using a solid or gradient background for professional look

## Preview:

After adding your image, the Hero section will display:

- Your profile picture on the left
- Your name, title, and bio on the right
- Responsive layout (stacks vertically on mobile)
