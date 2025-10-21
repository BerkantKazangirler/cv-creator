# CV Template System

## Templates Available

### 1. Double Column Template (Original)

Located in: `src/components/sections/double-coulmn/`

**Layout:**

- Two-column grid layout
- Professional blue and grey color scheme
- Compact information display
- Sections: Header, Summary, Experience, Skills, Languages, Certifications, Education

### 2. Single Column Template (New - Modern)

Located in: `src/components/sections/single-column/`

**Features:**

- Modern gradient header with centered profile photo
- Clean card-based sections with rounded corners
- Timeline-style experience display with connected dots
- Tag-based skills display
- Progress bars for language proficiency
- Blue accent color (#3B82F6)
- Better spacing and readability

**Layout:**

- Full-width gradient header
- Single column main content
- Two-column grid for Skills/Languages and Certifications/Education
- Background colors for visual hierarchy (white and gray-50)

## Usage

The application includes a template switcher at the top of the page with two buttons:

- **Double Column** - Original template
- **Single Column** - New modern template

## Component Structure

Each template has the following components:

- `header.tsx` - Profile photo, name, headline, contact info
- `summary.tsx` - Professional summary/about section
- `experience.tsx` - Work experience with dates and descriptions
- `skills.tsx` - Technical and professional skills
- `languages.tsx` - Language proficiency with interactive controls
- `certification.tsx` - Professional certifications
- `education.tsx` - Educational background

## Styling

### Double Column Template

- Colors: `double-primary-black`, `double-main-blue`, `double-about`, `double-grey`
- Font: Rubik (headings), Inter (body)
- Border style: Dashed borders with 3px thickness

### Single Column Template

- Colors: Blue-600, Gray-50, Gray-900
- Gradient: `from-blue-600 to-indigo-700`
- Rounded corners: `rounded-lg`
- Shadows: `shadow-lg`, `shadow-xl`
- Modern spacing: `gap-4`, `p-4`, `p-8`

## Adding a New Template

1. Create a new folder in `src/components/sections/`
2. Create all 7 component files with consistent naming
3. Create an `index.ts` to export all components
4. Create a new layout file in `src/layouts/`
5. Export the layout from `src/layouts/index.ts`
6. Add template option to the switcher in `App.tsx`

## Customization

Each section component:

- Uses the `useDataContext()` hook for data
- Uses the `useStylesContext()` hook for styling options
- Supports loading states
- Includes click-to-select functionality
- Has editable titles when selected
