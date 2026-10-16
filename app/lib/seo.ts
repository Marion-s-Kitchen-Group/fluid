import type {SeoConfig} from '@shopify/hydrogen';

import {getSeoMeta} from '@shopify/hydrogen';

type MatchData =
  | (Record<string, unknown> & {
      seo?: SeoConfig;
    })
  | undefined;

export function getSeoMetaFromMatches(
  matches: ReadonlyArray<{data?: unknown} | undefined>,
) {
  const seoData = [
    ...matches
      .filter((match) => typeof (match?.data as MatchData)?.seo !== 'undefined')
      .map((match) => (match?.data as MatchData)?.seo),
  ];
  return getSeoMeta(...seoData) || [];
}
