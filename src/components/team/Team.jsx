
import founder from './founder.jpg'
import anshu from './anshu.png'
import alka from './alkasrivastav.jpg'
import colsnajay from './colsnajay.png'
import drajay from './drajay.png'
import vnsrivastav from './vnsrivastav.jpg'

const people = [
    {
      name: 'Vikas C Varma',
      role: 'Founder',
      imageUrl: founder,
      bio: 'Vikas C Varma is a general insurance professional who retired from Future Generali India Insurance, Mumbai in November 2018, after working in the insurance sector for 35 plus years. He is now dedicated to the rural development cause and has initiated a few related projects in a village cluster in district Sitapur, UP , India. His vision is to set up a model village in the district, that can then be replicated elsewhere',
    },
    {
      name: 'Dr. Anshu Srivastva',
      role: 'Founder',
      imageUrl: anshu,
      bio: 'Dr Anshu Srivastava –Ph. D in Computer Science and coordinating the training cell of QRAT Computer Group, Lucknow.  She is in Computer field for past 25 years and guided many M.Tech and Ph.D.  Research scholars’ .Anshu is proficient in administration, training and computers and manages our office besides IT, HR, Training and web-site development. She is a keen philanthropist and working enthusiastically towards realization of goals of the Foundation.',
    },
    {
      name: 'V N Srivastava',
      role: 'Founder',
      imageUrl: vnsrivastav,
      bio: 'V N Srivastava is a Fellow Chartered Accountant and richly experienced finance professional who has served various Industry over 30 years. His last assignment was as Chief Financial Officer with M/s SofniterSpA, Milan in Italy. He is now in full time practise and have varied interest including rural development. He is actively devoting to the cause of KGSV to set up a model village that can then be replicated elsewhere.',
    },
    {
      name: 'Dr Alka Srivastava',
      role: 'Founder',
      imageUrl: alka,
      bio: 'Dr Alka Srivastava, is an MBBS from RIMS, Ranchi and received Residency training in Pediatrics at the University of Illinois, Chicago. She is currently working at L. Medicine, a multi -specialty group associated with Loyola University Medical Center and MacNeal Hospital, in suburban Chicago. She has been a practicing Pediatrician for 26+ years and been involved with multiple aspects of rural health and education since high school years. She is a keen enthusiast for child health, education and shares our rural development cause for building an inclusive society. With deep roots and linkages in India, she volunteers inputs & support for upliftment of deprived rural masses and related Projects.',
    },
    {
      name: 'Col Sanjay Chandra',
      role: 'Founder',
      imageUrl: colsnajay,
      bio: 'Col Sanjay Chandra took premature retirement from the armed forces and has been working in the corporate sector for the past 10 years dealing with current and emerging technologies. He is a skilled and experienced operational strategist who has profound interest in education of children. He espouses the rural development cause and volunteers support for rural projects and execution. He shares our vision for upliftment of rural masses including setting up of a few model villages which will pave a path for mass upliftment aimed at education, hygiene & sanitation and vocational training.',
    },
    {
      name: 'Dr. Ajay Verma',
      role: 'Founder',
      imageUrl: drajay,
      bio: 'Dr. Ajay Verma, Founder Director, ARTHGRAM Agri and Business Services has 37 years of diversified experience. He has served Gujarat Agriculture University, Anand, JN Agriculture University, Jabalpur, Govt. veterinary department, Bhopal, Oriental Insurance Company, Future Generali India Insurance Company and Swisscontact Worldwide Dhaka, Bangladesh. He has made notable contribution towards developing crop insurance and financial inclusion in various Government sponsored schemes, MFIs, NGOs and Rural banks to distribute low-cost financial products. Dr Verma shares our vision on rural development and has volunteered his experience, understanding and support for projects related to crop, veterinary and area of micro-finance.',
    },
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  