'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold mb-8">Toast Demo</h1>
      
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Success!',
            description: 'Your action was completed successfully.',
            variant: 'default',
          });
        }}
      >
        Show Success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Error!',
            description: 'Something went wrong. Please try again.',
            variant: 'destructive',
          });
        }}
      >
        Show Error Toast
      </Button>
    </div>
  );
}
