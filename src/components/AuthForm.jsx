import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const AuthForm = ({ mode }) => {
  return (
    <form className="space-y-6">
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            autoComplete={
              mode === "signup" ? "new-password" : "current-password"
            }
          />
        </div>
        {mode === "signup" && (
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              id="confirm"
              type="password"
              required
              placeholder="Confirm your password"
              autoComplete="new-password"
            />
          </div>
        )}
      </div>
      <Button className="w-full mt-4 cursor-pointer" type="submit">
        {mode === "login" ? "Login" : "Sign Up"}
      </Button>
    </form>
  );
};

export default AuthForm;
