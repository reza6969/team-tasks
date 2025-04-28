export type Assignee = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export const assignees: Assignee[] = [
  {
    id: "1",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    email: "michael.r@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma.w@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "James Kumar",
    email: "james.k@company.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  }
]; 