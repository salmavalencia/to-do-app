import Entries from "@/components/modules/entries";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Entries />
      </main>
    </div>
  );
}
