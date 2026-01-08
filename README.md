
# JeniDub Task Manager

A project management dashboard for tracking team updates across different departments in a startup environment.

## Setup Instructions

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn package manager

### Installation & Running Locally

1.  **Clone the repository**
    
    ```bash
    git clone <repository-url>
    cd ct-fe-p1-task-manager
    
    ```
    
2.  **Install dependencies**
    
    ```bash
    npm install
    
    ```
    
3.  **Configure Auth0 (Optional)**
    
    The app currently uses demo Auth0 credentials. For production use, update the following in `src/components/AuthLayer/Auth0Provider.tsx`:
    
    ```typescript
    const domain: string = "YOUR_AUTH0_DOMAIN";
    const clientId: string = "YOUR_AUTH0_CLIENT_ID";
    const redirectUri: string = "http://localhost:5173/callback";
    
    ```
    
4.  **Run the development server**
    
    ```bash
    npm run dev
    
    ```
    
5.  **Access the application**
    
    Open your browser and navigate to `http://localhost:5173`
    
6.  **Login**
    
    Click the "Log In" button on the landing page to authenticate via Auth0 and access the dashboard.
    

----------

## Summary

### What Was Built
A project management dashboard that enables startup teams to create, track, and manage project updates across six key functional areas:
-   **Product/Engineering** - Feature development and technical updates
-   **Marketing** - Campaign launches and content initiatives
-   **Sales** - Partnership deals and revenue milestones
-   **Customer Success** - Onboarding and support improvements
-   **Operations** - Infrastructure and process updates
-   **Finance** - Funding rounds and budget allocation

### Key Features
-   **Authentication**: Secure login/logout via Auth0
-   **CRUD Operations**: Create, read, update, and delete project updates
-   **Category Filtering**: Filter updates by department/team
-   **Responsive UI**: Bootstrap-based responsive design
-   **Modal Views**: Full-screen modals for adding and editing updates

### Design Decisions for Optimal Design
I used a combination of React 19 and React Bootstrap components to minimize load time and enable instant updates as the CRUD operations are performed. I also used React Router to allow the app to have dynamic routing by component and more control of the URL parameter handling. As for the design choices for layout, I made the design lightweight by condensing the information about each update for the dashboard with the option to view the details and edit individual updates. I also used high contrast color palette to make it easy to read and borders between sections to make the app easy to navigate. Finally, I chose to use modals for the detailed and edit views to allow the user to focus on the task without leaving the website. Finally, I added Auth0 to require authentication for the project to protect the information once the site is live. This will enable the client to control access to the app once they begin posting sensitive information related to the business.


----------

## Known Issues & Future Enhancements
### Known Bugs
1.  **Filter Functionality Issue**: The category filter in `PostGridView.tsx` currently filters an already-filtered list instead of the full post list. This prevents showing all posts after initial filtering.
    -   **Line 24-25 in PostGridView.tsx**: Should filter `postList` instead of `filteredPostList`
2.  **Initial Grid Display**: The post grid doesn't display any posts on initial load because `filteredPostList` starts as an empty array instead of showing all posts by default.
3. **Search Functionality**: Currently blocked by the Typescript definition of the category labels. 

### Items for Discussion with Client
-   **Format for Most Recent Updates**: How would you like to display the most recent posts (date order, show by category only, show 3 most recenter regardless of category)
 
### Proposals for MVP v2
-   [ ] **Backend Integration**: Replace localStorage with a proper backend API (Node.js/Express + MongoDB/PostgreSQL)
-   [ ] **File Upload**: Add ability to attach documents and images to updates
-   [ ] **Date Tracking**: Add created/updated timestamps to posts
-   [ ] **Dark Mode**: Add theme toggle for dark/light mode