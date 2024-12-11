import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { Event } from "@/utils/types";
import { EditableField } from "../../../_components/EditableField";

interface DateFieldProps {
  event: Event;
  isOwner: boolean;
  onUpdate: (event: Event) => void;
}

export function DateField({ event, isOwner, onUpdate }: DateFieldProps) {
  const handleUpdate = async (newValue: string) => {
    try {
      const response = await fetch(`/api/events/${event.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ event_date: newValue }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      onUpdate(data.data[0]);
    } catch (error) {
      console.error("Błąd podczas aktualizacji daty:", error);
    }
  };

  const date = new Date(event.event_date);
  
  const formattedDate = event.event_date 
    ? format(date, "d MMMM yyyy', godz.' HH:mm", { locale: pl })
    : "Brak daty";

  const dateForInput = event.event_date 
    ? format(date, "yyyy-MM-dd'T'HH:mm")
    : "";

  return (
    <div className="flex items-center gap-2 text-gray-700">
      <span className="text-gray-500">Data wydarzenia:</span>
      {isOwner ? (
        <EditableField
          value={dateForInput}
          type="datetime-local"
          className="text-lg text-gray-700"
          onSave={handleUpdate}
          displayFormat="d MMMM yyyy', godz.' HH:mm"
        />
      ) : (
        <div className="text-lg text-gray-700">
          {formattedDate}
        </div>
      )}
    </div>
  );
} 