import CurrentAffairsMenu from "./CurrentAffairMenu";
import CurrentAffairsQA from "./CurrentAffairQa";
import LatestPosts from "./LatestPost";

export default function CurrentAffairs() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left Menu */}
        <div className="md:col-span-1">
          <CurrentAffairsMenu />
        </div>

        {/* Main Q&A Section */}
        <div className="md:col-span-2">
          <CurrentAffairsQA />
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1">
          <LatestPosts />
        </div>
      </div>
    </div>
  );
}
