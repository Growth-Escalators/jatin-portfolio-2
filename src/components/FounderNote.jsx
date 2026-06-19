import Reveal from "./Reveal.jsx";

export default function FounderNote() {
  return (
    <section className="section founder-note" id="note">
      <div className="wrap founder-note-wrap">
        <Reveal className="kicker">● How I Think About This</Reveal>
        <Reveal as="p" className="founder-note-body" delay={0.08}>
          Somewhere along the way I stopped seeing this as "managing ads." A founder
          hands you their budget — money they earned, a business they bet their life
          on — and your job is to grow it like it's yours. So that's what I do. I go
          past the ad account when I have to, because the goal was never good
          metrics; it was your business working. The founders I do my best work with
          feel the same way about it. That shared belief is the whole game.
        </Reveal>
      </div>
    </section>
  );
}
