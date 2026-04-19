import Image from "next/image";
import Link from "next/link";

const GetFriends = ({ Friend }) => {
  if (!Friend) return null;

  const getStatus = (Friend) => {
    const today = new Date();
    const dueDate = Friend?.next_due_date
      ? new Date(Friend.next_due_date)
      : null;

    if (!dueDate) return "unknown";

    if (today > dueDate) return "overdue";
    if ((Friend?.days_since_contact || 0) >= (Friend?.goal || 0)) return "due";
    return "on-track";
  };

  const status = getStatus(Friend);

  return (
    <Link href={`/friends/${Friend.id}`}>
      <div className="text-center w-65 rounded-2xl mt-2 shadow-[#00000014] space-y-3 p-6 bg-white">

        <Image
          className="rounded-full mx-auto"
          src={Friend.picture || "/default-avatar.png"}
          width={80}
          height={80}
          alt="Friends Picture"
        />

        <h1 className="text-xl font-semibold">{Friend.name}</h1>

       
        <div className="flex justify-center gap-2 flex-wrap">
          {(Friend.tags || []).map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-[#cbfadbFF] text-gray-700 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <p>
          Status:{" "}
          <span
            className={`font-bold ${
              status === "overdue"
                ? "bg-red-600 p-1.5 rounded-2xl text-white"
                : status === "due"
                ? "bg-yellow-500 p-1.5 rounded-2xl text-black"
                : "bg-green-500 p-1.5 rounded-2xl text-white"
            }`}
          >
            {status}
          </span>
        </p>

        <p>
          Next Contact: {Friend?.next_due_date || "N/A"}
        </p>

      </div>
    </Link>
  );
};

export default GetFriends;