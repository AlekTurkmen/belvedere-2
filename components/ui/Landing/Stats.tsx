"use client"

import { ExternalLink } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card"   
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/shadcn/chart"

const chartData1 = [{ month: "january", desktop: 20, mobile: 80 }]
const chartData2 = [{ month: "january", desktop: 30, mobile: 70 }]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "zinc-600",
  },
  mobile: {
    label: "Mobile",
    color: "white",
  },
} satisfies ChartConfig

function RadialChart({ data, title, description }: { 
  data: typeof chartData1, 
  title: string, 
  description: string 
}) {
  return (
    <Card className="flex flex-col bg-transparent border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white text-3xl">{title}</CardTitle>
        <CardDescription className="text-zinc-400 text-xl">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[350px]"
        >
          <RadialBarChart
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            outerRadius={200}
          >
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-white text-4xl font-bold"
                        >
                          {data[0].mobile}%
                        </tspan>
                        <a 
                          href="https://www.cnbc.com/2019/12/27/how-to-get-a-job-often-comes-down-to-one-elite-personal-asset.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 4}
                            className="fill-zinc-400 text-sm hover:fill-zinc-200 transition-colors"
                          >
                            CNBC ↗
                          </tspan>
                        </a>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              fill="rgb(161 161 170)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="mobile"
              fill="white"
              stackId="a"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default function Stats() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <RadialChart 
          data={chartData1} 
          title="80% of jobs" 
          description="are filled through connections."
        />
        <RadialChart 
          data={chartData2} 
          title="70% of job openings" 
          description="are not published publicly."
        />
      </div>
      
      <div className="w-full max-w-2xl mx-auto text-center mt-[-100px]">
        <p className="text-xl md:text-2xl font-semibold text-white bg-[#43836115] rounded-lg">
          So let's <span className="text-[#438361]">stack the odds in your favor</span> by building a network.
        </p>
      </div>
    </div>
  )
}
