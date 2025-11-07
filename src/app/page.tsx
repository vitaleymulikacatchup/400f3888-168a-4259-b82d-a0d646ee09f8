"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Anchor, BarChart3, Compass, Crown, Facebook, Instagram, MessageSquare, Ship, Star, Users } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g64ad265a0aaef5bbf60e2317f79680fc5284c3d347d33e06e605afdebf8e34e0865bdc8510acd40fb33e5e94e6d57e7193db6ecdcca827ceefa80bfd8ce06ff8_1280.jpg"
          logoAlt="Sailing Adventures Logo"
          brandName="Ocean Winds"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Ocean Winds"
          description="Experience the freedom of the open seas with our premium sailing adventures and luxury yacht charters"
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Fleet",
              href: "product"
            }
          ]}
          imageSrc="https://pixabay.com/get/g394d126410b969536cba54f9377e56e50083d79585a3a24e2053c690fe1759993c43b5866cdd9a923300c4db34d6d841c06abefa234356bdc0ced2c327c2476c_1280.jpg"
          imageAlt="Luxury sailing yacht on the ocean at sunset"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Sailing Excellence"
          description={[
            "For over two decades, we've been crafting unforgettable sailing experiences across the world's most beautiful waters.",
            "Our fleet of luxury yachts and expert crew ensure every voyage becomes a treasured memory."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Sailing Experiences"
          description="From intimate sunset cruises to adventure-filled week-long charters, discover the perfect sailing experience"
          tag="Adventures"
          tagIcon={Anchor}
          features={[
            {
              title: "Luxury Yacht Charters",
              description: "Premium yacht charters with professional crew for the ultimate sailing experience",
              imageSrc: "https://pixabay.com/get/g84c7dc8ba47bedb32e6042f09f33e1ac392625d1d5615eccfa4cc87f18dcb916821da26b7466ce2c4e5e7e0bd5f445e8fad79432c231a15e75e82b44b8ec1477_1280.jpg",
              imageAlt: "Luxury yacht charter sailing"
            },
            {
              title: "Sailing Lessons",
              description: "Learn to sail with certified instructors in safe, beautiful waters",
              imageSrc: "https://pixabay.com/get/geb8121e98f7285295002264ed4c1cee810259d5681630f5fd39c78fdd4c53e97381a0064e2a1871e8343e6a4ce6f03aeffe70d92649f61b03d645a197792758c_1280.jpg",
              imageAlt: "Sailing lessons on yacht"
            },
            {
              title: "Sunset Cruises",
              description: "Romantic sunset sailing with champagne and breathtaking ocean views",
              imageSrc: "https://pixabay.com/get/gc074cdeef3a67108d4628e12abc7f0100c0480f139fd5383519bcceffa319d5169432926f71218f6f8bb1f29c0633a8f9dff540b4f69e5d0c10102318e53fc9c_1280.jpg",
              imageAlt: "Sunset sailing cruise"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Fleet"
          description="Choose from our collection of luxury sailing yachts, each maintained to the highest standards"
          tag="Yachts"
          tagIcon={Ship}
          products={[
            {
              id: "1",
              brand: "Beneteau",
              name: "Oceanis 51.1",
              price: "$2,500/day",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://pixabay.com/get/ge12b47729c6e3abc1f94aa5e9f97c0831c9ad3409ad257bd2b81ec2f77f6d16d6de1c38121e355057ed6afbc6810c4960ebe4eda12bb94c9ff03fbc766247818_1280.jpg",
              imageAlt: "Beneteau Oceanis sailing yacht"
            },
            {
              id: "2",
              brand: "Jeanneau",
              name: "Sun Odyssey 519",
              price: "$3,200/day",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://pixabay.com/get/g3ef03837adf3a686fc0360a7acce148269ec01a95d0e127116aa9d9e8fe8eefaa67ac298a312e2019a0fb6cbf3c12611ef6f922b8aa12eb40b5f2adcda222bfa_1280.jpg",
              imageAlt: "Jeanneau Sun Odyssey yacht interior"
            },
            {
              id: "3",
              brand: "Catalina",
              name: "545 Luxury",
              price: "$4,100/day",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://pixabay.com/get/g9cb9e83951cee9b343f23b70f661480471923c7723137e33401cac8832ff10f4977fdf137055a2662975b06834931eee74343f6813e53e1bc200ee1ff02b3944_1280.jpg",
              imageAlt: "Catalina luxury sailing yacht"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Charter Packages"
          description="Choose the perfect sailing package for your adventure"
          tag="Packages"
          tagIcon={Compass}
          plans={[
            {
              id: "1",
              badge: "Popular Choice",
              badgeIcon: Star,
              price: "$850/day",
              subtitle: "Perfect for couples and small groups",
              features: [
                "Half-day or full-day charters",
                "Professional captain included",
                "Snorkeling equipment provided",
                "Complimentary beverages"
              ]
            },
            {
              id: "2",
              badge: "Premium Experience",
              badgeIcon: Crown,
              price: "$2,400/day",
              subtitle: "Luxury sailing with full amenities",
              features: [
                "Multi-day yacht charters",
                "Experienced crew included",
                "Gourmet meals prepared onboard",
                "Water sports equipment",
                "Premium bar service"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Sailing by the Numbers"
          description="Over two decades of creating unforgettable sailing memories"
          tag="Experience"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "2000+",
              title: "Happy Sailors",
              description: "Guests who've experienced the magic of sailing with us",
              icon: Users
            },
            {
              id: "2",
              value: "25+",
              title: "Premium Yachts",
              description: "Luxury vessels in our carefully maintained fleet",
              icon: Ship
            },
            {
              id: "3",
              value: "20+",
              title: "Years Experience",
              description: "Decades of expertise in luxury sailing charters",
              icon: "Award"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Crew"
          description="Professional sailors and hospitality experts dedicated to your perfect voyage"
          tag="Our Team"
          tagIcon={Anchor}
          members={[
            {
              id: "1",
              name: "Captain Sarah Martinez",
              role: "Master Mariner",
              description: "Over 15 years sailing experience across Pacific and Atlantic waters. Certified sailing instructor and yacht captain.",
              imageSrc: "https://pixabay.com/get/gaa283b8c5060c1c4f5c1a3dd6f3b4d7ff63c95077d5412ccbec60b148c18a8b6486d0bc8d2e792d0646b48a89ba517a05a90cdf2ae530422076a1cf4a505bcf1_1280.jpg",
              imageAlt: "Captain Sarah Martinez"
            },
            {
              id: "2",
              name: "James Thompson",
              role: "First Mate & Guide",
              description: "Expert in local waters and marine wildlife. Passionate about sharing the beauty of sailing with our guests.",
              imageSrc: "https://pixabay.com/get/gaa283b8c5060c1c4f5c1a3dd6f3b4d7ff63c95077d5412ccbec60b148c18a8b6486d0bc8d2e792d0646b48a89ba517a05a90cdf2ae530422076a1cf4a505bcf1_1280.jpg",
              imageAlt: "James Thompson sailing guide"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Sailors Say"
          description="Real experiences from guests who've discovered the magic of sailing with us"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Emily Richardson",
              role: "Yacht Charter Guest",
              company: "Adventure Seeker",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g02674bb85f38428d96993db645ae2c37f00e9dd2f188f204d4eacffcc1d906e26b55c9f50efdf02d1d6823fdd566bb46e9c4ca5633387b829ee19be4003bd9bd_1280.jpg",
              imageAlt: "Emily Richardson testimonial"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Corporate Charter",
              company: "Tech Executive",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g22f8d37386b8a890e7162579a24168c4a576e998a303e58ef02bc4f5a80a34437b43ddac041d5509db3d2269016b69e92888a0c3e6c5e569bb5c18676db666e4_1280.jpg",
              imageAlt: "Michael Chen testimonial"
            },
            {
              id: "3",
              name: "Sarah & David Wilson",
              role: "Anniversary Cruise",
              company: "Celebrating 25 Years",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ged18952929dc43a9adbfa1e0384caf93602b3c8be2076775c12e4edfba6a8b15f24962168bffc07dd19b1ba0c1e1e2b18207daa83c284291d0abbd7d6d3b4c7c_1280.jpg",
              imageAlt: "Sarah and David Wilson testimonial"
            },
            {
              id: "4",
              name: "Alexander Thompson",
              role: "Sailing Student",
              company: "Learn to Sail",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5f7aeaa31b670c017ffbca73837b586d9cb545172c33c4e0d18f717c38cc415a7ea1abab5d37f167955715905b9ef3e3f40c5661be20d96399f0153b29d8fa23_1280.jpg",
              imageAlt: "Alexander Thompson testimonial"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our sailing adventures"
          faqs={[
            {
              id: "1",
              title: "Do I need sailing experience?",
              content: "No sailing experience required! Our professional captains handle all sailing operations while you relax and enjoy the journey. We also offer sailing lessons if you'd like to learn."
            },
            {
              id: "2",
              title: "What's included in the charter?",
              content: "All charters include professional crew, safety equipment, basic refreshments, and snorkeling gear. Premium packages include gourmet meals, premium beverages, and additional water sports equipment."
            },
            {
              id: "3",
              title: "What if weather conditions are poor?",
              content: "Safety is our top priority. If weather conditions are unsafe, we'll reschedule your charter at no additional cost or provide a full refund if rescheduling isn't possible."
            },
            {
              id: "4",
              title: "How far in advance should I book?",
              content: "We recommend booking 2-4 weeks in advance, especially during peak season (May-September). Last-minute bookings are possible based on availability."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Set Sail"
          tagIcon={Compass}
          title="Ready for Your Sailing Adventure?"
          description="Contact us today to plan your perfect sailing experience. Whether it's a romantic sunset cruise or an extended yacht charter, we'll make it unforgettable."
          inputPlaceholder="Your email address"
          buttonText="Get Started"
          termsText="By submitting, you agree to receive sailing updates and charter information. Unsubscribe anytime."
          imageSrc="https://pixabay.com/get/g1ac54c8408e4dc3a9476055dd485ec63474ebf4b25f224adef0e8ddf59ce5774ceb277a6a19cc8d8da2a054f2401e557511aa15e58a0ef54284fe836879c1fcd_1280.jpg"
          imageAlt="Sailing yacht at marina"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://pixabay.com/get/g64ad265a0aaef5bbf60e2317f79680fc5284c3d347d33e06e605afdebf8e34e0865bdc8510acd40fb33e5e94e6d57e7193db6ecdcca827ceefa80bfd8ce06ff8_1280.jpg"
          logoText="Ocean Winds"
          copyrightText="© 2025 Ocean Winds Sailing. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Yacht Charters",
                  href: "product"
                },
                {
                  label: "Sailing Lessons",
                  href: "feature"
                },
                {
                  label: "Sunset Cruises",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Fleet",
                  href: "product"
                },
                {
                  label: "Meet the Crew",
                  href: "team"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Book Now",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/oceanwindssailing",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/oceanwindssailing",
              ariaLabel: "Follow us on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}