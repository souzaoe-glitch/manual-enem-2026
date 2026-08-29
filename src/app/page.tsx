import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import { ProblemSection } from '@/components/ProblemSection'
import BeliefBreaker from '@/components/BeliefBreaker'
import CADEMethod from '@/components/CADEMethod'
import InteractiveDemo from '@/components/InteractiveDemo'
import { InsideEbook } from '@/components/InsideEbook'
import { PageMap } from '@/components/PageMap'
import { ProductPreview } from '@/components/ProductPreview'
import { OfficialQuestions } from '@/components/OfficialQuestions'
import { DistractorLab } from '@/components/DistractorLab'
import SixtySecondTraining from '@/components/SixtySecondTraining'
import { Benefits } from '@/components/Benefits'
import { Audience } from '@/components/Audience'
import { Comparison } from '@/components/Comparison'
import ReviewSheet from '@/components/ReviewSheet'
import { Offer } from '@/components/Offer'
import Guarantee from '@/components/Guarantee'
import FAQ from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Stats />
      <ProblemSection />
      <BeliefBreaker />
      <CADEMethod />
      <InteractiveDemo />
      <InsideEbook />
      <PageMap />
      <ProductPreview />
      <OfficialQuestions />
      <DistractorLab />
      <SixtySecondTraining />
      <Benefits />
      <Audience />
      <Comparison />
      <ReviewSheet />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  )
}
