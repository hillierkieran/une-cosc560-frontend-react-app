
# Setup Instructions

After cloning this React project, follow these steps to set up the application:

### 2. **Install dependencies**:
   Install all the required dependencies using npm:
   ```bash
   npm install
   ```

### 3. **Set Up Environment Configuration**:
   Copy the `.env.example` file to create a `.env` file and adjust the API base URL:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set `REACT_APP_API_BASE_URL` to point to your backend API:
   ```env
   REACT_APP_API_BASE_URL=http://your-laravel-backend.test/api
   ```

### 4. **Start the React development server**:
   To start the app in development mode, run:
   ```bash
   npm start
   ```

   This will open the app in your default browser at `http://localhost:3000`.

