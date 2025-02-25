/* eslint-disable react/prop-types */
import BackButton from "@/components/custom/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAudio } from "@/context/AudioContext";
import { Clock, FileText, Mic, PieChart } from "lucide-react"; // Import icons
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-2">
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const UsageSummaryCard = () => {
  const { usageCard: data = {}, getUsageCard, loading } = useAudio();
  const { sessionId } = useParams();

  useEffect(() => {
    getUsageCard(sessionId);
  }, []);

  return (
    <>
      <div className="flex justify-center  my-1">
        <BackButton extraClass="justify-end " />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Tokens Used */}
        <Card className="p-4 border shadow-lg bg-white rounded-xl hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Total Tokens
            </CardTitle>
            <PieChart size={28} className="text-green-500" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <SkeletonLoader />
            ) : (
              <p className="text-3xl font-bold text-green-600">
                {data?.totalTokensUsed}
              </p>
            )}
          </CardContent>
        </Card>
        {/* Last Used */}
        <Card className="p-4 border shadow-lg bg-white rounded-xl hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Last Used
            </CardTitle>
            <Clock size={28} className="text-green-500" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <SkeletonLoader />
            ) : (
              <p className="text-md font-medium text-gray-900">
                {data?.lastUsed}
              </p>
            )}
          </CardContent>
        </Card>
        {/* Feature-Wise Usage */}
        {loading
          ? [...Array(2)].map((_, index) => (
              <Card
                key={index}
                className="p-4 border shadow-lg bg-white rounded-xl hover:shadow-xl transition-all"
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    <div className="h-5 bg-gray-300 rounded w-32"></div>
                  </CardTitle>
                  <FileText size={28} className="text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="h-8 bg-gray-200 rounded w-20"></div>
                </CardContent>
              </Card>
            ))
          : data?.featureUsage?.map((feature, index) => {
              // Choose an icon based on the feature name
              let IconComponent = FileText; // Default icon for Summary
              if (feature.featureName.toLowerCase().includes("transcription")) {
                IconComponent = Mic; // Use Mic icon for Transcription
              }

              return (
                <Card
                  key={index}
                  className="p-4 border shadow-lg bg-white rounded-xl hover:shadow-xl transition-all"
                >
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {feature.featureName}
                    </CardTitle>
                    <IconComponent size={28} className="text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-green-600">
                      {feature.tokenUsageCount}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
      </div>
    </>
  );
};

export default UsageSummaryCard;
