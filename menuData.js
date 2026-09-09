/**
 * ============================================================================
 * THE MOOD — BISTRO & GRILL
 * menuData.js — Bütün 11 bölmə, alt kateqoriyalar və dəqiq yemək kartları
 * ============================================================================
 */

import { sectionsPart1 } from './menuData1.js';
import { sectionsPart2 } from './menuData2.js';

// Bütün bölmələri birləşdiririk
const rawSections = [...sectionsPart1, ...sectionsPart2];

// Hər bir yemək üçün universal ad, təsvir və format təmin edirik
export const menuSections = rawSections.map(sec => ({
  ...sec,
  subcategories: sec.subcategories.map(sub => ({
    ...sub,
    items: sub.items.map(it => {
      const itName = it.name;
      return {
        id: it.id,
        price: it.price,
        names: {
          az: itName,
          en: it.nameEn || itName,
          ru: it.nameRu || itName
        },
        desc: {
          az: it.desc || '',
          en: it.descEn || it.desc || '',
          ru: it.descRu || it.desc || ''
        },
        tag: it.tag || null,
        subcategoryId: sub.id,
        subcategoryName: sub.names,
        sectionId: sec.id,
        sectionName: sec.names
      };
    })
  }))
}));

/**
 * Axtarış və səbət əməliyyatları üçün bütün 11 bölmədəki yeməklərin vahid siyahısı
 */
export function getAllMenuItems() {
  const all = [];
  menuSections.forEach(sec => {
    sec.subcategories.forEach(sub => {
      sub.items.forEach(it => {
        all.push(it);
      });
    });
  });
  return all;
}
