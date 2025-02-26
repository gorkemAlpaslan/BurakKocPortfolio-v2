"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";

export default function ProjectForm({ project = null }) {
  const [formData, setFormData] = useState(
    project || {
      title: "",
      description: "",
      fullDescription: "",
      category: "",
      client: "",
      date: "",
      duration: "",
      team: [],
      deliverables: [],
      technologies: [],
      researchMethods: [],
      goals: [],
      results: [],
      images: [],
      isPublished: false,
    }
  );
  const [files, setFiles] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (e, field) => {
    const value = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
    files.forEach((file) => {
      formDataToSend.append("images", file);
    });

    // Implement your API call here
    // if (project) {
    //   await updateProject(project.id, formDataToSend)
    // } else {
    //   await createProject(formDataToSend)
    // }
    router.push("/admin");
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Proje Başlığı</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Proje Başlığı"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Kısa Açıklama</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Kısa Açıklama"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullDescription">Detaylı Açıklama</Label>
          <Textarea
            id="fullDescription"
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            placeholder="Detaylı Açıklama"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Kategori</Label>
          <Select
            name="category"
            value={formData.category}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, category: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Kategori Seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Logo Tasarımı">Logo Tasarımı</SelectItem>
              <SelectItem value="UI/UX Tasarımı">UI/UX Tasarımı</SelectItem>
              <SelectItem value="Web Tasarım">Web Tasarım</SelectItem>
              <SelectItem value="Mobil Uygulama">Mobil Uygulama</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="client">Müşteri</Label>
          <Input
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            placeholder="Müşteri"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Tarih</Label>
          <Input
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Tarih"
            type="date"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Proje Süresi</Label>
          <Input
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Proje Süresi (örn: 12 Hafta)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="team">Takım Üyeleri</Label>
          <Textarea
            id="team"
            name="team"
            value={formData.team.join(", ")}
            onChange={(e) => handleArrayChange(e, "team")}
            placeholder="Takım Üyeleri (virgülle ayırın)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deliverables">Teslim Edilenler</Label>
          <Textarea
            id="deliverables"
            name="deliverables"
            value={formData.deliverables.join(", ")}
            onChange={(e) => handleArrayChange(e, "deliverables")}
            placeholder="Teslim Edilenler (virgülle ayırın)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="technologies">Kullanılan Teknolojiler</Label>
          <Textarea
            id="technologies"
            name="technologies"
            value={formData.technologies.join(", ")}
            onChange={(e) => handleArrayChange(e, "technologies")}
            placeholder="Kullanılan Teknolojiler (virgülle ayırın)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="researchMethods">Araştırma Metodları</Label>
          <Textarea
            id="researchMethods"
            name="researchMethods"
            value={formData.researchMethods.join(", ")}
            onChange={(e) => handleArrayChange(e, "researchMethods")}
            placeholder="Araştırma Metodları (virgülle ayırın)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="goals">Hedefler</Label>
          <Textarea
            id="goals"
            name="goals"
            value={formData.goals.join(", ")}
            onChange={(e) => handleArrayChange(e, "goals")}
            placeholder="Hedefler (virgülle ayırın)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="results">Sonuçlar</Label>
          <Textarea
            id="results"
            name="results"
            value={formData.results.join(", ")}
            onChange={(e) => handleArrayChange(e, "results")}
            placeholder="Sonuçlar (virgülle ayırın)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="images">Görseller</Label>
          <Input
            id="images"
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
          />
          <div className="grid grid-cols-3 gap-4 mt-2">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <Image
                  src={URL.createObjectURL(file) || "/placeholder.svg"}
                  alt={`Uploaded image ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-0 right-0 -mt-2 -mr-2"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="isPublished"
            checked={formData.isPublished}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, isPublished: checked }))
            }
          />
          <Label htmlFor="isPublished">Yayınla</Label>
        </div>

        <Button type="submit">
          {project ? "Projeyi Güncelle" : "Projeyi Kaydet"}
        </Button>
      </form>
    </Card>
  );
}
