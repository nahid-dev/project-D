'use client';

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/lib/LanguageContext';

export interface BangladeshLocation {
  division: string;
  district: string;
  upazila: string;
}

interface BangladeshLocationSelectorProps {
  value?: BangladeshLocation;
  onChange: (location: BangladeshLocation) => void;
}

interface APIDivision {
  id: string;
  name: string;
  bn_name: string;
}

interface APIDistrict {
  id: string;
  name: string;
  bn_name: string;
  upazilas: APIUpazila[];
}

interface APIUpazila {
  name: string;
}

export default function BangladeshLocationSelector({
  value,
  onChange,
}: BangladeshLocationSelectorProps) {
  const { t } = useTranslation();

  const [divisions, setDivisions] = useState<APIDivision[]>([]);
  const [districts, setDistricts] = useState<APIDistrict[]>([]);
  const [upazilas, setUpazilas] = useState<APIUpazila[]>([]);

  const [selectedDivision, setSelectedDivision] = useState<APIDivision | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<APIDistrict | null>(null);

  const [isLoadingDivisions, setIsLoadingDivisions] = useState(true);
  const [isLoadingDistricts, setIsLoadingDistricts] = useState(false);

  // Fetch divisions on mount
  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const res = await fetch('https://bdapis.com/api/v1.1/divisions');
        const json = await res.json();
        const dataList = json.data || json;
        
        if (Array.isArray(dataList)) {
          const formatted = dataList.map((d: any) => ({
            id: d._id || d.id || d.division,
            name: d.division || d.name,
            bn_name: d.divisionbn || d.bn_name || d.division
          }));
          setDivisions(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch divisions", err);
      } finally {
        setIsLoadingDivisions(false);
      }
    };
    fetchDivisions();
  }, []);

  // Sync incoming value to selected objects if they exist
  useEffect(() => {
    if (value?.division && divisions.length > 0 && !selectedDivision) {
      const div = divisions.find((d) => d.name === value.division);
      if (div) setSelectedDivision(div);
    }
  }, [value, divisions, selectedDivision]);

  useEffect(() => {
    if (value?.district && districts.length > 0 && !selectedDistrict) {
      const dist = districts.find((d) => d.name === value.district);
      if (dist) {
        setSelectedDistrict(dist);
        setUpazilas(dist.upazilas);
      }
    }
  }, [value, districts, selectedDistrict]);

  // Fetch districts when division changes
  useEffect(() => {
    if (!selectedDivision) {
      setDistricts([]);
      setUpazilas([]);
      return;
    }

    const fetchDistricts = async () => {
      setIsLoadingDistricts(true);
      try {
        const res = await fetch(`https://bdapis.com/api/v1.1/division/${selectedDivision.name.toLowerCase()}`);
        const json = await res.json();
        const dataList = json.data || json;
        
        if (Array.isArray(dataList)) {
          const formattedDistricts = dataList.map((d: any) => ({
            id: d._id || d.id || d.district,
            name: d.district || d.name,
            bn_name: d.districtbn || d.bn_name || d.district,
            upazilas: Array.isArray(d.upazilla) 
              ? d.upazilla.map((u: any) => ({ name: typeof u === 'string' ? u : u.upazilla || u.name }))
              : (d.upazilas || [])
          }));
          setDistricts(formattedDistricts);
        }
      } catch (err) {
        console.error("Failed to fetch districts", err);
      } finally {
        setIsLoadingDistricts(false);
      }
    };

    fetchDistricts();
  }, [selectedDivision]);

  const handleDivisionChange = (divName: string) => {
    const div = divisions.find((d) => d.name === divName) || null;
    setSelectedDivision(div);
    setSelectedDistrict(null);
    setUpazilas([]);
    onChange({ division: div?.name || '', district: '', upazila: '' });
  };

  const handleDistrictChange = (distName: string) => {
    const dist = districts.find((d) => d.name === distName) || null;
    setSelectedDistrict(dist);
    if (dist) {
      setUpazilas(dist.upazilas);
    } else {
      setUpazilas([]);
    }
    onChange({
      division: selectedDivision?.name || '',
      district: dist?.name || '',
      upazila: '',
    });
  };

  const handleUpazilaChange = (upaName: string) => {
    onChange({
      division: selectedDivision?.name || '',
      district: selectedDistrict?.name || '',
      upazila: upaName,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
      <Select
        value={value?.division || ''}
        onValueChange={handleDivisionChange}
      >
        <SelectTrigger className="w-full h-12">
          <SelectValue placeholder={isLoadingDivisions ? "Loading..." : "Select Division"} />
        </SelectTrigger>
        <SelectContent>
          {divisions.map((div) => (
            <SelectItem key={div.id} value={div.name}>
              {div.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={value?.district || ''}
        onValueChange={handleDistrictChange}
        disabled={!selectedDivision}
      >
        <SelectTrigger className="w-full h-12">
          <SelectValue placeholder={isLoadingDistricts ? "Loading..." : "Select District"} />
        </SelectTrigger>
        <SelectContent>
          {districts.map((dist) => (
            <SelectItem key={dist.id} value={dist.name}>
              {dist.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={value?.upazila || ''}
        onValueChange={handleUpazilaChange}
        disabled={!selectedDistrict}
      >
        <SelectTrigger className="w-full h-12">
          <SelectValue placeholder="Select Upazila" />
        </SelectTrigger>
        <SelectContent>
          {upazilas.map((upa, idx) => (
            <SelectItem key={upa.name + idx} value={upa.name}>
              {upa.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
