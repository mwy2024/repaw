import HeroSection       from '@/components/home/HeroSection'
import ScenariosSection  from '@/components/home/ScenariosSection'
import CommunitySection  from '@/components/home/CommunitySection'
import PhilosophySection from '@/components/home/PhilosophySection'
import GearCarousel      from '@/components/gear/GearCarousel'
import CustomSection     from '@/components/home/CustomSection'
import ShopSection       from '@/components/home/ShopSection'
import WorkshopHero      from '@/components/home/WorkshopHero'
import FeedbackSection   from '@/components/home/FeedbackSection'
import CTASection        from '@/components/home/CTASection'
import Ticker            from '@/components/shared/Ticker'
import PageKeyboardNavigation from '@/components/home/PageKeyboardNavigation'

export default function HomePage() {
  return (
    <main id="top" className="presentation-page">
      <PageKeyboardNavigation />
      <HeroSection />
      <Ticker />
      <PhilosophySection />
      <section id="scenarios" aria-label="探索运动场景" className="scenario-banner">
        <GearCarousel />
      </section>
      <ScenariosSection />
      <ShopSection />
      <CustomSection />
      <CommunitySection />
      <WorkshopHero />
      <FeedbackSection />
      <CTASection />
    </main>
  )
}
