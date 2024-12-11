import { Event } from "@/utils/types";
import { EditableTitle } from "./EditableTitle";
import { EditableDescription } from "./EditableDescription";
import { QRShare } from "../../../_components/QRShare";

interface EventHeaderProps {
  event: Event;
  isOwner: boolean;
  onUpdate: (event: Event) => void;
}

export function EventHeader({ event, isOwner, onUpdate }: EventHeaderProps) {
  return (
    <div className="max-w-3xl sm:max-w-screen-xl mx-auto shadow-lg border border-gray-200 rounded-lg">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <EditableTitle 
              event={event} 
              isOwner={isOwner} 
              onUpdate={onUpdate} 
            />
            <EditableDescription 
              event={event} 
              isOwner={isOwner} 
              onUpdate={onUpdate} 
            />
          </div>
          {isOwner && <QRShare eventId={event.id} shortCode={event.short_code} />}
        </div>
      </div>
    </div>
  );
} 