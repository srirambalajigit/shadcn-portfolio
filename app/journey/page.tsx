"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function TracingBeamDemo() {
  return (
    <div className="px-6">
      <div className="mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
           

            <p className="text-xl mb-4">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "My Journey",
    description: (
      <>
        <p>
        My introduction to Power Platform started with what we know as Dynamics CRM.Started my journey with Dynamics CRM 2011 around 2011.
        Before that I was into Visual Basic,ASP.NET and .NET. One of my early projects was in US back in late 90s was with VBA and Visual Basic where I worked at World Trade Center, New York City. It was an app for reinsurance brokers built using VB.

        </p>
        <p>
        Then I moved to .NET starting with .NET 1.0,ASP.NET and the later versions. Worked as a .NET consultant in 6 different cities in US - New York City, San Jose,Hartford,South Bend,Rochester and Boston across East Coast, West Coast and Mid west.Returned back to India in 2005.

        </p>
        <p>
        Joined an Indian MNC and was back in US in 2009 at Microsoft in Redmond. Worked on a tool called SSMA(SQL Server Migration Assistant) at Microsoft with SQL Server Product Group.
        </p>
        <p>
            Then I returned back to India. Since I had background in Data Migration, my first Dynamics CRM project was part of Data migration stream for a large CRM 2011 implementation using Cozyroc and SSIS. Then I switched to other areas of Dynamics CRM. Worked on multiple versions CRM 2013, CRM 2016 and then Dynamics 365. 

        </p>
        <p>
        In Power Platform, dabbled with PCF controls, which piqued my interest.Had worked on server side ASP.NET Web controls during my earlier experience, so was very much interested in this. This is when I started blogging and published controls to PCF Gallery in 2019, when PCF was still in early stages. Had conversations with others in community on PCF controls. Had great interactions with PCF product managers, who very open to feedback. 

        </p>
        <p>
        Started working with Power Platform in 2019 and working on it ever since. 
        You can also check out the DevConnect Show with Danish Naglekar video here which talks about my journey.

        </p>
        <iframe src="https://youtube.com/embed/7ES2rk5pu8o?start=171" width={"480"} height={'270'}></iframe>
      </>
    ),
    badge: "",
    image:
      "/images/journey.jpg",
  },
  ];
