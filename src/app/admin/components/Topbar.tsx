'use client';
import { useEffect, useState } from 'react';

interface BatteryManager extends EventTarget {
  charging: boolean;
  level: number;
  chargingTime: number;
  dischargingTime: number;
  addEventListener(type: 'levelchange' | 'chargingchange', listener: EventListener): void;
  removeEventListener(type: 'levelchange' | 'chargingchange', listener: EventListener): void;
}

interface NavigatorWithBattery extends Navigator {
  getBattery(): Promise<BatteryManager>;
}

export default function Topbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [batteryCharging, setBatteryCharging] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update dateTime every second
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get battery status and update it in real-time
  useEffect(() => {
    const getBatteryStatus = async () => {
      const battery = await (navigator as NavigatorWithBattery).getBattery();

      const updateBattery = () => {
        setBatteryLevel(battery.level * 100);
        setBatteryCharging(battery.charging);
      };

      updateBattery();

      battery.addEventListener('levelchange', updateBattery);
      battery.addEventListener('chargingchange', updateBattery);

      // Cleanup listeners on unmount
      return () => {
        battery.removeEventListener('levelchange', updateBattery);
        battery.removeEventListener('chargingchange', updateBattery);
      };
    };

    getBatteryStatus();
  }, []);

  // Toggle notifications popup
  const handleBellClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="w-full bg-gray-900 shadow px-6 py-4 flex justify-between items-center border-b border-gray-300">
      <h1 className="font-bold text-lg">NorthNLoans Admin</h1>
      <div className="flex items-center space-x-6 text-sm">
        <span>{dateTime.toLocaleString()}</span>

        {/* Battery Info with charging icon */}
        <span className="text-yellow-500">
          🔋 {batteryLevel !== null ? `${batteryLevel.toFixed(0)}%` : 'Loading...'}
          {batteryCharging ? ' ⚡' : ''}
        </span>

        {/* Bell Icon for notifications */}
        <span className="text-red-500 cursor-pointer" onClick={handleBellClick}>
          🔔 1 new application
        </span>
      </div>

      {/* Modal for notification */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white/30 backdrop-filter backdrop-blur-sm bg-opacity-10 p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">New Notifications</h2>
            <p>1 new application has been submitted.</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-blue-200 text-black cursor-pointer hover:bg-blue-400 px-6 py-2 rounded mt-4 ml-2"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
