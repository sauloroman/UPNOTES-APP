import React, { useEffect, useState } from 'react';
import { useCategories } from '../../hooks';

interface Props {
  selectedCourseCategories?: string[],
  isFormSubmitted: boolean;
  onChange: (target: any) => void;
}

export const InputCourseCategories: React.FC<Props> = ({ selectedCourseCategories = [], isFormSubmitted, onChange }) => {
  const { courseCategories } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(selectedCourseCategories);

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
      setSelectedCategories(selectedCourseCategories)
    }
  }, [isFormSubmitted])

  return (
    <div className="input-course-categories">
      {courseCategories?.map((courseCategory: string) => (
        <div
          onClick={() => onSelectCategory(courseCategory)}
          key={courseCategory}
          className={`${
            selectedCategories.includes(courseCategory) &&
            'input-course-categories__category--active'
          } input-course-categories__category`}
        >
          {courseCategory}
        </div>
      ))}
    </div>
  );
};
