const { useState } = React;

export const ColorPicker = () => {
  // Initialize with white as per the user story
  const [color, setColor] = useState('#ffffff');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      {/* The background color is bound directly to the 'color' state. 
          When setColor is called, this div re-renders with the new value.
      */}
      <div 
        id="color-picker-container" 
        style={{ 
          backgroundColor: color, 
          width: '400px', 
          height: '400px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}
      >
        <h1 style={{ mixBlendMode: 'difference', color: '#fff' }}>
          Color Picker
        </h1>

        <input 
          type="color" 
          id="color-input" 
          value={color} 
          onChange={handleChange} 
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
        />
        
        <code style={{ mixBlendMode: 'difference', color: '#fff', marginTop: '10px' }}>
          {color}
        </code>
      </div>
    </div>
  );
};