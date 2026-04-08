import { getAllChronologyEvents } from "@/data/chronology";
import { ChronologyTimeline } from "@/components/chronology";

export default function ChronologiePage() {
  const events = getAllChronologyEvents();

  return (
    <div className="min-h-screen">
      <main className="px-6 py-12">
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <p className="text-sm text-ink-500 text-center mb-8">
            {events.length} événements de ~{Math.abs(events[0]?.year ?? 0)} av. J.-C. à{" "}
            {events[events.length - 1]?.year} apr. J.-C.
          </p>
          <ChronologyTimeline events={events} />
        </div>
      </main>
    </div>
  );
}
