
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

export interface PersonalityTrait {
  trait: string;
  value: number;
  fullMark: number;
}

interface PersonalityChartProps {
  data: PersonalityTrait[];
  title?: string;
}

const PersonalityChart: React.FC<PersonalityChartProps> = ({ 
  data, 
  title = "Personality Traits" 
}) => {
  return (
    <Card className="universe-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#8B5CF640" />
              <PolarAngleAxis
                dataKey="trait"
                tick={{ fill: "#6E59A5", fontSize: 12 }}
              />
              <Radar
                name="Personality"
                dataKey="value"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalityChart;
