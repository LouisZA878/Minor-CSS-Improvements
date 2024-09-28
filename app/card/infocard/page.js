import Circle from "./Circle";

const circlesData = [
  { degree: 86, color: 'red', label: 'DOGS' },
  { degree: 99, color: 'blue', label: 'CATS' },
  { degree: 62, color: 'green', label: 'JavaScript' },
];

const Page = () => {
  return (
    <div className='info-container'>
      {circlesData.map((circle, index) => (
        <Circle
          key={index}
          degree={circle.degree}
          color={circle.color}
          label={circle.label}
        />
      ))}
    </div>
  );
};

export default Page;
