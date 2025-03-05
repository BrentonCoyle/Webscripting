// Give the props for the color and current time of clock
type ClockProps = {
    color: string;
    time?: string;
  };

export default function Clock({ color, time }: ClockProps) {
    return (
    // Clock Start
      <h1 style={{ color: color }}>
        {time}
      </h1>
    // Clock end
    );
  }