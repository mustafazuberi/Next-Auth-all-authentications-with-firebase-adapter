import Image from "next/image";
import { User } from "@/interfaces/user.interface";

interface Props {
  user: User;
}
const UserCard = ({ user }: Props) => {
  return (
    <>
      {!!user && (
        <div className="rounded-xl border-2 border-white">
          <div className="p-5">
            <div className="flex justify-center">
              <Image
                src={user?.image!}
                alt="User Image"
                width={100}
                height={100}
                className="rouded-[50%]"
              />
            </div>
            <div className="info mt-4">
              <h3>Name : {user?.name}</h3>
              <h3>Email : {user?.email}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
