import { BannerCard } from 'app/ui/content/banner-card';
import { BannerCardsResolver } from 'app/ui/content/banner-cards-resolver';
import { RootMenu } from 'app/ui/shared/menu';

/**
 * This is an example `BannerCardsResolver`. It has a fixed banner card for the banking
 * root menu (which could, for example, offer some banking service to users, such
 * as loans or cards) and a card that rotates promoted content (which could be
 * businesses or advertisements) to be shown in the marketplace root menu.
 */
export class ExampleBannerCardsResolver implements BannerCardsResolver {

  /**
   * Returns some example banners
   */
  bannerCards(): BannerCard[] {

    // A general banner
    const general: BannerCard = {
      banners: [{
        content: `This banner is always shown`
      }]
    };

    // A banner only for the banking menu
    const banking: BannerCard = {
      rootMenus: [RootMenu.BANKING],
      banners: [{
        content: `This banner is shown only on the banking menu`
      }]
    };

    // A banner for marketplace
    const promoted: BannerCard = {
      rootMenus: [RootMenu.MARKETPLACE, RootMenu.PUBLIC_MARKETPLACE],
      loggedUsers: true,
      guests: true,
      banners: [{
        content: 'First banner showing on marketplace'
      },
      {
        content: 'Second banner showing on marketplace'
      },
      {
        content: 'Third banner showing on marketplace'
      }]
    };

    return [general, banking, promoted];
  }

}
