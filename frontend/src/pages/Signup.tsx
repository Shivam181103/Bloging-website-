 
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

function Signup() { 
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center w-1/2 p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Already have an account? 
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username">Username</label>
            <input id="username" placeholder="Enter your username" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="m@example.com" type="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <input id="password" placeholder="Enter your password" type="password" />
          </div>
          <button className="w-full bg-black text-white">Sign Up</button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 bg-gray-100 p-8">
        <blockquote className="text-lg font-medium">
          <p className="mb-4">
            “The customer service I received was exceptional. The support team went above and beyond to address my
            concerns.”
          </p>
          <footer>
            <p className="font-bold">Jules Winnfield</p>
            <p className="text-muted-foreground">CEO, Acme Inc</p>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Signup
