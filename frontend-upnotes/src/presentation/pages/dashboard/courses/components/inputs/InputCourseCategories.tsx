import React, { useEffect, useState } from 'react';
import { useCategories } from '../../../../../shared/hooks/useCategories';

interface Props {
  isFormSubmitted: boolean;
  onChange: (target: any) => void;
}

export const InputCourseCategories: React.FC<Props> = ({ isFormSubmitted, onChange }) => {
  const { courseCategories } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const onSelectCategory = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((selectedCategories) => [
        ...selectedCategories,
        category,
      ]);
    } else {
      setSelectedCategories( 
        selectedCategories => selectedCategories.filter( selectedCategory => selectedCategory != category )
      )
    }
  };

  useEffect(() => {
    onChange({ target: { name: 'categories', value: selectedCategories } });
  }, [selectedCategories]);

  useEffect(() => {
    if ( !isFormSubmitted ) {
      setSelectedCategories([])
    }
  }, [isFormSubmitted])

  return (
    <div className="create-course__categories">
      {courseCategories?.map((courseCategory) => (
        <div
          onClick={() => onSelectCategory(courseCategory)}
          key={courseCategory}
          className={`${
            selectedCategories.includes(courseCategory) &&
            'create-course__category--active'
          } create-course__category`}
        >
          {courseCategory}
        </div>
      ))}
    </div>
  );
};
