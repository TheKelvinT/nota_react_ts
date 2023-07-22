import LocalButton from '@/components/Button'
import NotFoundImg from '@/assets/not-found.png'


const NotFound = () => {
  return (
      <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 bg-primary">
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center ">
  <img src={NotFoundImg} alt="not found" />
        <p className="text-[40px] mb-12  tracking-wider text-secondary font-marcellus">PAGE NOT FOUND</p>
        
        <p className="text-xl  text-secondary font-marcellus">Sorry, we couldn’t find this page.</p>
        <p className="text-xl mb-12 text-secondary font-marcellus">But don’t worry, you can find plenty of other things on our homepage.</p>
        <LocalButton title="Return to Homepage" path='/' />
    </div>
   
</div>
  )
}

export default NotFound