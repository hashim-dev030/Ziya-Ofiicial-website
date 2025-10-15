import { footerData } from '../models/footeData'

export const useFooter = () => {
  return {
    quickLinks: footerData.quickLinks,
    programs: footerData.programs,
    contact: footerData.contact,
    social: footerData.social,
    copyright: footerData.copyright,
  }
}
