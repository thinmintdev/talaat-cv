# Services Section Styles - Memory Bank

This file contains alternative service section styles that can be easily copied back into the homepage when needed.

## Style 1: Premium Cards with Pricing

```jsx
{/* Services Section - STYLE 1: Premium Cards with Pricing */}
<section id="services" className="p-8 sm:p-12 md:p-16 lg:p-24 bg-gradient-to-br from-gray-50 to-gray-100">
  <div>
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
        Style 1: Premium Cards
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
        {HOMEPAGE_DATA.services.title} - Premium Cards
      </h2>
      <div className="w-[75px] h-[5px] mx-auto rounded-full bg-blue-700 mb-6" />
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {HOMEPAGE_DATA.services.subtitle}
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {HOMEPAGE_DATA.services.offerings.map((service) => (
        <div key={service.title} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
          {/* Service Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 text-white">
              {service.icon === 'code' && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              )}
              {service.icon === 'wordpress' && (
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.075.899 0 0 .584.075 1.2.105l1.784 4.904-2.51 7.566-4.175-12.47c.652-.03 1.235-.105 1.235-.105.583-.075.516-.93-.065-.899 0 0-1.756.135-2.88.135C4.78 6.06 4.622 6.06 4.444 6.06 6.605 3.344 9.584 1.5 12.999 1.5c2.906 0 5.547 1.08 7.555 2.85-.049-.003-.095-.009-.143-.009-1.06 0-1.81.93-1.81 1.927 0 .9.518 1.66 1.073 2.56.417.72.9 1.64.9 2.97 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014z"/></svg>
              )}
              {service.icon === 'cloud' && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
              )}
              {service.icon === 'mobile' && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              )}
              {service.icon === 'analytics' && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              )}
              {service.icon === 'support' && (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z"/></svg>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
            
            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 pt-6 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-2xl font-bold text-blue-600">{service.startingPrice}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Timeline</p>
                <p className="font-semibold text-gray-900">{service.timeline}</p>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1">
              {service.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                  +{service.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Style 2: Process Timeline

```jsx
{/* STYLE 2: Process Timeline */}
<section id="services-timeline" className="p-8 sm:p-12 md:p-16 lg:p-24 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
        Style 2: Process Timeline
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
        {HOMEPAGE_DATA.services.title} - Timeline View
      </h2>
      <div className="w-[75px] h-[5px] mx-auto rounded-full bg-blue-700 mb-6" />
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {HOMEPAGE_DATA.services.subtitle}
      </p>
    </div>
    
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-200"></div>
      
      {HOMEPAGE_DATA.services.offerings.map((service, index) => (
        <div key={service.title} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}>
          <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-semibold text-blue-600">{service.startingPrice}</span>
                <span className="text-sm text-gray-500">{service.timeline}</span>
              </div>
            </div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
        </div>
      ))}
    </div>
  </div>
</section>
```

## Style 3: Icon Grid Layout (Currently Active)

This is the style currently being used on the homepage. It features:
- Horizontal card layout matching existing sections
- Compact design with technology emphasis  
- Hover effects with color transitions
- Side-by-side grid on larger screens

The current implementation can be found in `/src/app/page.tsx` lines 513-590.

## Usage Instructions

To switch to a different style:

1. Copy the desired style from this file
2. Replace the current services section in `/src/app/page.tsx` 
3. Update the section ID if needed to avoid conflicts
4. Test the build with `pnpm build`

## Deprioritized Services (Removed from Main Homepage)

These services were removed from the main homepage but kept here for future reference:

### Cloud Architecture
```javascript
{
  icon: "cloud",
  title: "Cloud Architecture",
  description: "Scalable, secure cloud infrastructure with DevOps automation",
  features: [
    "AWS Infrastructure Setup",
    "CI/CD Pipeline Configuration", 
    "Performance Optimization",
    "Security Implementation"
  ],
  technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  timeline: "1-3 weeks",
  startingPrice: "$3,000"
}
```

### Mobile-First Design
```javascript
{
  icon: "mobile",
  title: "Mobile-First Design",
  description: "Responsive web applications optimized for all devices and screen sizes",
  features: [
    "Responsive Web Design",
    "Progressive Web Apps",
    "Mobile Performance",
    "Touch-Optimized UI"
  ],
  technologies: ["Tailwind CSS", "React Native", "PWA", "Web Vitals"],
  timeline: "2-6 weeks",
  startingPrice: "$4,000"
}
```

## Notes

- All styles use the same data from `HOMEPAGE_DATA.services.offerings`
- Icons are implemented inline for each style
- Responsive design is included in all variations
- Hover effects and animations are included
- Deprioritized services can be easily re-added to the offerings array if needed