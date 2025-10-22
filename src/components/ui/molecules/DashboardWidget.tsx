import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '../card.tsx';
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils.ts";

interface DashboardWidgetProps {
  title: string;
  children?: React.ReactNode;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "glass p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300",
        "border border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-800",
        "text-gray-800 dark:text-gray-200"
      )}
    >
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardWidget;
