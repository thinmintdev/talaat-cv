import { TypingTitle } from "@/components/TypingTitle";
import { HOMEPAGE_DATA } from "@/data/homepage-data";

export function ServicesSection() {
  return (
    <section id="services" className="p-8 sm:p-12 md:p-16 lg:p-24 bg-white">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900">
              <TypingTitle
                text={HOMEPAGE_DATA.services.title}
                speed={60}
                delay={200}
              />
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              {HOMEPAGE_DATA.services.subtitle}
            </p>
          </div>

          <div className="lg:col-span-8">
            {/* Services Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {HOMEPAGE_DATA.services.offerings.map((service) => (
                <div key={service.title} className="group cursor-pointer">
                  <div className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:bg-blue-50/30">
                    {/* Header with Icon, Title, and Description */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-8 h-8 text-white">
                          {service.icon === "code" && (
                            <svg
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              role="img"
                              aria-label="Code development services"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                          )}
                          {service.icon === "wordpress" && (
                            <svg
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              role="img"
                              aria-label="WordPress development services"
                            >
                              <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.075.899 0 0 .584.075 1.2.105l1.784 4.904-2.51 7.566-4.175-12.47c.652-.03 1.235-.105 1.235-.105.583-.075.516-.93-.065-.899 0 0-1.756.135-2.88.135C4.78 6.06 4.622 6.06 4.444 6.06 6.605 3.344 9.584 1.5 12.999 1.5c2.906 0 5.547 1.08 7.555 2.85-.049-.003-.095-.009-.143-.009-1.06 0-1.81.93-1.81 1.927 0 .9.518 1.66 1.073 2.56.417.72.9 1.64.9 2.97 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014z" />
                            </svg>
                          )}
                          {service.icon === "MdDesignServices" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7"
                              role="img"
                              aria-label="Design services"
                            >
                              <path
                                d="M5.57489 2.07403C5.83474 2.19892 6 2.4617 6 2.75001C6 3.57985 6.31211 4.05763 6.70313 4.63948L6.73156 4.68175C7.0641 5.17579 7.5 5.8234 7.5 6.75001C7.5 7.69552 7.02282 8.52959 6.29615 9.02452C6.48733 9.1848 6.65672 9.38248 6.80225 9.61803C7.27801 10.388 7.5 11.5645 7.5 13.2549C7.5 14.967 7.27003 17.023 6.89541 18.6644C6.70914 19.4806 6.47843 20.2335 6.20272 20.7994C6.06598 21.08 5.89948 21.3541 5.69217 21.5685C5.48714 21.7804 5.17035 22.0049 4.75 22.0049C4.32965 22.0049 4.01286 21.7804 3.80783 21.5685C3.60052 21.3541 3.43402 21.08 3.29728 20.7994C3.02157 20.2335 2.79086 19.4806 2.60459 18.6644C2.22997 17.023 2 14.967 2 13.2549C2 11.5645 2.22199 10.388 2.69775 9.61803C2.84328 9.38248 3.01267 9.1848 3.20385 9.02452C2.47718 8.52959 2 7.69552 2 6.75001C2 6.38181 2.00034 5.74889 2.38341 4.93168C2.75829 4.13192 3.47066 3.21301 4.78148 2.16436C5.00661 1.98425 5.31504 1.94914 5.57489 2.07403Z"
                                fill="currentColor"
                              />
                              <path
                                d="M9.99994 14.917C9.46162 14.8267 8.94761 14.6647 8.46806 14.4412C8.48904 14.0349 8.49994 13.637 8.49994 13.2549C8.49994 12.8491 8.48793 12.461 8.46151 12.0915C8.90465 12.4558 9.4275 12.7266 9.99994 12.874V10.5C9.99994 9.67157 10.6715 9 11.4999 9H14.9999C14.9999 6.79086 13.2091 5 10.9999 5C10.0146 5 9.11251 5.35626 8.4154 5.94699C8.24173 5.13337 7.83957 4.53662 7.58275 4.15554L7.54248 4.09572C8.51976 3.40549 9.7125 3 10.9999 3C14.3136 3 16.9999 5.68629 16.9999 9H20.4999C21.3284 9 21.9999 9.67157 21.9999 10.5V19.5C21.9999 20.3284 21.3284 21 20.4999 21H11.4999C10.6715 21 9.99994 20.3284 9.99994 19.5V14.917ZM11.9999 14.917V19H19.9999V11H16.6585C15.9423 13.0265 14.1683 14.5533 11.9999 14.917ZM14.4648 11H11.9999V12.874C13.0508 12.6035 13.9345 11.9168 14.4648 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          )}
                          {service.icon === "support" && (
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-7 h-7"
                              role="img"
                              aria-label="Support and maintenance services"
                            >
                              <path
                                d="M22 7.99995H20M20 7.99995H19C17 6.00173 14 3.99974 12 5.99995M20 7.99995V15.9999M12 5.99995L8.99956 9.00158C8.9202 9.08097 8.88052 9.12066 8.84859 9.1558C8.15499 9.91889 8.15528 11.0842 8.84927 11.847C8.88121 11.8821 8.92098 11.9218 9.00031 12.0011C9.07967 12.0804 9.11936 12.1201 9.15449 12.152C9.91743 12.8453 11.0824 12.8452 11.8451 12.1516C11.8802 12.1197 11.9199 12.08 11.9992 12.0007L12.9996 11.0003M12 5.99995C10 3.99974 7 6.0018 5 8.00001H4M2 8.00001H4M4 8.00001V15.9999M20 15.9999V18.9999H22M20 15.9999H17.1716M15 12.9999L16.5 14.4999C16.5796 14.5796 16.6195 14.6194 16.6515 14.6547C17.3449 15.4175 17.3449 16.5824 16.6515 17.3452C16.6195 17.3805 16.5796 17.4203 16.5 17.4999C16.4204 17.5795 16.3805 17.6194 16.3453 17.6515C15.5824 18.3449 14.4176 18.3449 13.6547 17.6515C13.6195 17.6194 13.5796 17.5795 13.5 17.4999L13 16.9999C12.4548 17.5452 12.1821 17.8178 11.888 17.9636C11.3285 18.2408 10.6715 18.2408 10.112 17.9636C9.81788 17.8178 9.54525 17.5452 9 16.9999C8.31085 17.9188 6.89563 17.7912 6.38197 16.7639L6 15.9999H4M4 15.9999V18.9999H2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl mt-[-5px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List - Full Width */}
                    {service.features && service.features.length > 0 && (
                      <ul className="mb-4 space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={`${service.title}-feature-${i}`}
                            className="flex items-start gap-2"
                          >
                            <span className="inline-block w-2.5 h-2.5 mt-1.5 rounded-sm bg-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags and Pricing - Full Width */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm text-sm text-gray-900"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-brandSecondary">
                          {service.startingPrice}
                        </p>
                        <p className="text-xs text-gray-500">
                          {service.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
