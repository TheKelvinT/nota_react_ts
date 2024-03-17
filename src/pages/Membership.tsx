import CustomImage from "@/components/CustomImage"
import Loading from "@/components/Loading"
import useLoadingStore from "@/store/loadingStore"
import { useEffect, useRef, useState } from "react"
import MembershipDesc from "@/components/Membership/MembershipDesc"
import MembershipContent from "@/components/Membership/MembershipContent"
import ContactSection from "@/components/ContactSection"
import { fetchMembershipConfig } from "@/utils/request"
import MembershipTerms from "@/components/Membership/MembershipTerms"
import { useLocation } from "react-router-dom"

const Membership = () => {
  const loading = useLoadingStore((state: any) => state.loading)
  const setLoading = useLoadingStore((state: any) => state.setLoading)
  const [data, setData] = useState<any>(null)
  const [pageType, setPageType] = useState("benefit")
  const location = useLocation()
  const tncRef = useRef<HTMLDivElement>(null) // Create a ref for the tnc element

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await fetchMembershipConfig()

        setData(data)
      } catch (error) {
        console.error("Error fetching data", error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    if (
      location.hash === "#tnc" &&
      location.pathname === "/communal-nota-membership/terms"
    ) {
      setPageType("terms")
      if (tncRef.current) {
        tncRef.current.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      setPageType("benefit")
    }
  }, [location])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="relative  overflow-hidden mx-auto max-w-[1920px] h-[55vh] hidden md:block lg:h-auto bg-main">
            <CustomImage
              Imgsrc={data?.membershipHero?.desktopImage?.image}
              alt="reservation-hero"
            />
          </div>
          <div className="relative  overflow-hidden mx-auto  h-[92vh] md:hidden lg:h-auto bg-main">
            <CustomImage
              Imgsrc={data?.membershipHero?.mobileImage?.image}
              alt="reservation-hero"
            />
          </div>
          {/* <ReservationDesc data={reservationsContent} />
        <ContactSection />
        <Faq faq={faq} /> */}
          {data && (
            <div id="tnc" ref={tncRef}>
              {pageType === "benefit" ? (
                <>
                  <MembershipDesc data={data} />
                  <MembershipContent data={data} />
                </>
              ) : (
                <MembershipTerms data={data} />
              )}
            </div>
          )}
          <ContactSection membershipType={true} />
        </>
      )}
    </div>
  )
}

export default Membership
