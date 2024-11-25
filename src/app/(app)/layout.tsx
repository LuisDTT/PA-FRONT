import SideBar from "@/components/SideBar";
export const layout = ({ children }: { children: React.ReactNode }) => {
  return <SideBar>{children}</SideBar>;
};

export default layout;
