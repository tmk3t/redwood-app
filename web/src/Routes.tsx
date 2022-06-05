import { Router, Route, Set, Private } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
/**
 * Notice that the import statement uses src/layouts/BlogLayout and not ../src/layouts/BlogLayout or ./src/layouts/BlogLayout. Being able to use just src is a convenience feature provided by Redwood: src is an alias to the src path in the current workspace.
 */
import BlogLayout from 'src/layouts/BlogLayout'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
