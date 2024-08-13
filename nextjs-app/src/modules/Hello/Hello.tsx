import { useUserQuery } from "@/provider/useUserQuery";

export default function Hello() {
    const { data: user, isLoading } = useUserQuery();
  
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!user) {
        return <div>User not found</div>;
    }
  
    return <div>Hello, {user.name} </div>;
}