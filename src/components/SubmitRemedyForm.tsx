
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { categories } from '@/data/remediesData';
import { Upload, Leaf, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface FormValues {
  title: string;
  category: string;
  ingredients: string;
  method: string;
  timeToResult: string;
  image?: FileList;
}

const SubmitRemedyForm: React.FC = () => {
  const { language, t } = useLanguage();
  const [preview, setPreview] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      category: 'health',
      ingredients: '',
      method: '',
      timeToResult: '',
    }
  });
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = () => {
    setPreview(null);
    form.setValue('image', undefined);
  };
  
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Here you would normally submit this to your backend
    toast({
      title: language === 'en' ? 'Remedy Submitted!' : 'नुस्खा भेज दिया गया!',
      description: language === 'en' 
        ? 'Thank you for sharing your remedy with our community.' 
        : 'अपना नुस्खा हमारे समुदाय के साथ साझा करने के लिए धन्यवाद।',
      variant: 'default',
    });
    
    // Reset form
    form.reset();
    setPreview(null);
  };
  
  return (
    <div className="paper-card max-w-3xl mx-auto">
      <h2 className="text-2xl font-handwritten text-mitti mb-6">
        {language === 'en' ? 'Share Your Nuskha' : 'अपना नुस्खा साझा करें'}
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-mitti">
                  {language === 'en' ? 'Remedy Title' : 'नुस्खे का शीर्षक'}
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder={language === 'en' ? "e.g. Turmeric Milk for Cold" : "जैसे: सर्दी के लिए हल्दी वाला दूध"} 
                    {...field} 
                    className="border-mitti/30 focus:border-mitti focus:ring focus:ring-haldi/30"
                  />
                </FormControl>
                <FormDescription>
                  {language === 'en' 
                    ? 'Give your remedy a clear, descriptive title'
                    : 'अपने नुस्खे को एक स्पष्ट, वर्णनात्मक शीर्षक दें'
                  }
                </FormDescription>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-mitti">
                  {language === 'en' ? 'Category' : 'श्रेणी'}
                </FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-mitti/30 focus:border-mitti focus:ring focus:ring-haldi/30">
                      <SelectValue placeholder={language === 'en' ? "Select a category" : "श्रेणी चुनें"} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {language === 'en' ? category.name.en : category.name.hi}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="ingredients"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-mitti">
                  {language === 'en' ? 'Ingredients' : 'सामग्री'}
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={language === 'en' 
                      ? "List each ingredient on a new line" 
                      : "प्रत्येक सामग्री को एक नई पंक्ति पर लिखें"
                    } 
                    {...field} 
                    className="min-h-32 border-mitti/30 focus:border-mitti focus:ring focus:ring-haldi/30"
                  />
                </FormControl>
                <FormDescription>
                  {language === 'en'
                    ? 'Include quantities where possible'
                    : 'जहां संभव हो मात्रा शामिल करें'
                  }
                </FormDescription>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-mitti">
                  {language === 'en' ? 'Method' : 'विधि'}
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={language === 'en' 
                      ? "Explain the step-by-step process" 
                      : "चरण-दर-चरण प्रक्रिया समझाएं"
                    } 
                    {...field} 
                    className="min-h-40 border-mitti/30 focus:border-mitti focus:ring focus:ring-haldi/30"
                  />
                </FormControl>
                <FormDescription>
                  {language === 'en'
                    ? 'Be specific about timing, temperature, etc.'
                    : 'समय, तापमान आदि के बारे में विशिष्ट रहें'
                  }
                </FormDescription>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="timeToResult"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-mitti">
                  {language === 'en' ? 'Time to Result' : 'परिणाम का समय'}
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder={language === 'en' ? "e.g. 2-3 days" : "जैसे: 2-3 दिन"} 
                    {...field} 
                    className="border-mitti/30 focus:border-mitti focus:ring focus:ring-haldi/30"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel className="text-mitti">
                  {language === 'en' ? 'Image (Optional)' : 'छवि (वैकल्पिक)'}
                </FormLabel>
                {!preview ? (
                  <div className="border-2 border-dashed border-mitti/30 rounded-md p-8 text-center hover:bg-mitti/5 transition-colors cursor-pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="remedy-image"
                      onChange={(e) => {
                        onChange(e.target.files);
                        handleImageChange(e);
                      }}
                      {...field}
                    />
                    <label htmlFor="remedy-image" className="cursor-pointer flex flex-col items-center">
                      <Upload className="h-8 w-8 text-mitti/60 mb-2" />
                      <span className="text-mitti/80">
                        {language === 'en' 
                          ? 'Click to upload an image' 
                          : 'छवि अपलोड करने के लिए क्लिक करें'
                        }
                      </span>
                    </label>
                  </div>
                ) : (
                  <div className="relative">
                    <img 
                      src={preview} 
                      alt="Preview" 
                      className="w-full max-h-64 object-cover rounded-md" 
                    />
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-mitti text-white p-1 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-mitti hover:bg-mitti/90 text-cream"
          >
            <Leaf className="h-4 w-4 mr-2" />
            {language === 'en' ? 'Submit Your Nuskha' : 'अपना नुस्खा भेजें'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SubmitRemedyForm;
