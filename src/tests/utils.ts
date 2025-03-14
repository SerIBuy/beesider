import {faker} from "@faker-js/faker";

export const generateMockData = (count: number) => {
    return Array.from({length: count}, () => ({
        abstract: faker.lorem.sentence(),
        web_url: faker.internet.url(),
        snippet: faker.lorem.sentence(),
        lead_paragraph: faker.lorem.sentence(),
        source: faker.lorem.sentence(),
        multimedia: [
            {
                rank: faker.number.int(),
                subtype: faker.lorem.words(1),
                caption: null,
                credit: null,
                type: faker.lorem.words(1),
                url: faker.internet.url(),
                height: faker.number.int(),
                width: faker.number.int(),
                subType: faker.lorem.words(1),
                crop_name: faker.lorem.words(1),
                legacy: {
                    xlarge: faker.internet.url(),
                    xlargewidth: faker.number.int(),
                    xlargeheight: faker.number.int()
                }
            },
            {
                rank: faker.number.int(),
                subtype: faker.lorem.words(1),
                caption: null,
                credit: null,
                type: faker.lorem.words(1),
                url: faker.internet.url(),
                height: faker.number.int(),
                width: faker.number.int(),
                subType: faker.lorem.words(1),
                crop_name: faker.lorem.words(1),
                legacy: {}
            },
            {
                rank: faker.number.int(),
                subtype: faker.lorem.words(1),
                caption: null,
                credit: null,
                type: faker.lorem.words(1),
                url: faker.internet.url(),
                height: faker.number.int(),
                width: faker.number.int(),
                subType: faker.lorem.words(1),
                crop_name: faker.lorem.words(1),
                legacy: {}
            },
            {
                rank: faker.number.int(),
                subtype: faker.lorem.words(1),
                caption: null,
                credit: null,
                type: faker.lorem.words(1),
                url: faker.internet.url(),
                height: faker.number.int(),
                width: faker.number.int(),
                subType: faker.lorem.words(1),
                crop_name: faker.lorem.words(1),
                legacy: {
                    thumbnail: faker.internet.url(),
                    thumbnailwidth: faker.number.int(),
                    thumbnailheight: faker.number.int()
                }
            },
            {
                rank: faker.number.int(),
                subtype: faker.lorem.words(1),
                caption: null,
                credit: null,
                type: faker.lorem.words(1),
                url: faker.internet.url(),
                height: faker.number.int(),
                width: faker.number.int(),
                subType: faker.lorem.words(1),
                crop_name: faker.lorem.words(1),
                legacy: {} 
            }
        ],
        headline: {
            main: faker.lorem.sentence(),
            kicker: null,
            content_kicker: null,
            print_headline: faker.lorem.sentence(),
            name: null,
            seo: null,
            sub: null
        },
        keywords: [
            {
                name: faker.lorem.words(1),
                value: faker.lorem.sentence(),
                rank: faker.number.int(),
                major: faker.lorem.words(1)
            },
            {
                name: faker.lorem.words(1),
                value: faker.lorem.sentence(),
                rank: faker.number.int(),
                major: faker.lorem.words(1)
            },
            {
                name: faker.lorem.words(1),
                value: faker.lorem.sentence(),
                rank: faker.number.int(),
                major: faker.lorem.words(1)
            },
            {
                name: faker.lorem.words(1),
                value: faker.lorem.sentence(),
                rank: faker.number.int(),
                major: faker.lorem.words(1)
            },
            {
                name: faker.lorem.words(1),
                value: faker.lorem.sentence(),
                rank: faker.number.int(),
                major: faker.lorem.words(1)
            }
        ],
        pub_date: faker.date.past(),
        document_type: faker.lorem.words(1),
        news_desk: faker.lorem.words(1),
        section_name: faker.lorem.words(1),
        byline: {
            original: faker.lorem.words(3),
            person: [
                {
                    firstname: faker.person.firstName(),
                    middlename: faker.lorem.words(1),
                    lastname: faker.person.lastName(),
                    qualifier: null,
                    itle: null,
                    role: faker.lorem.words(1),
                    organization: faker.lorem.words(1),
                    rank: faker.number.int()
                }
            ],
            organization: null,
        },
        type_of_material: faker.lorem.words(1),
        _id: faker.internet.url(),
        word_count: faker.number.int(),
        uri: faker.internet.url() 
    }));
}