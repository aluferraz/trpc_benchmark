from .models import Post
from ariadne import convert_kwargs_to_snake_case
from app import db


def listPosts_resolver(obj, info):
    try:
        posts = [post.to_dict() for post in Post.query.all()]
        print(posts)
        payload = {
            "success": True,
            "posts": posts
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload

@convert_kwargs_to_snake_case
def getPost_resolver(obj, info, id):
    try:
        post = Post.query.get(id)
        payload = {
            "success": True,
            "post": post.to_dict()
        }

    except AttributeError:  # todo not found
        payload = {
            "success": False,
            "errors": [f"Todo item matching id {id} not found"]
        }

    return payload

def get_geodata_resolver(obj, info):
    sql = 'SELECT "recipes_geographicdata"."objectid", "recipes_geographicdata"."geoid10", "recipes_geographicdata"."geoid20", "recipes_geographicdata"."statefp", "recipes_geographicdata"."countyfp", "recipes_geographicdata"."tractce", "recipes_geographicdata"."blkgrpce", "recipes_geographicdata"."csa", "recipes_geographicdata"."csa_name", "recipes_geographicdata"."cbsa", "recipes_geographicdata"."cbsa_name", "recipes_geographicdata"."cbsa_pop", "recipes_geographicdata"."cbsa_emp", "recipes_geographicdata"."cbsa_wrk", "recipes_geographicdata"."ac_total", "recipes_geographicdata"."ac_water", "recipes_geographicdata"."ac_land", "recipes_geographicdata"."ac_unpr", "recipes_geographicdata"."totpop", "recipes_geographicdata"."counthu", "recipes_geographicdata"."hh", "recipes_geographicdata"."p_wrkage", "recipes_geographicdata"."autoown0", "recipes_geographicdata"."pct_ao0", "recipes_geographicdata"."autoown1", "recipes_geographicdata"."pct_ao1", "recipes_geographicdata"."autoown2p", "recipes_geographicdata"."pct_ao2p", "recipes_geographicdata"."workers", "recipes_geographicdata"."r_lowwagewk", "recipes_geographicdata"."r_medwagewk", "recipes_geographicdata"."r_hiwagewk", "recipes_geographicdata"."r_pctlowwage", "recipes_geographicdata"."totemp", "recipes_geographicdata"."e5_ret", "recipes_geographicdata"."e5_off", "recipes_geographicdata"."e5_ind", "recipes_geographicdata"."e5_svc", "recipes_geographicdata"."e5_ent", "recipes_geographicdata"."e8_ret", "recipes_geographicdata"."e8_off", "recipes_geographicdata"."e8_ind", "recipes_geographicdata"."e8_svc", "recipes_geographicdata"."e8_ent", "recipes_geographicdata"."e8_ed", "recipes_geographicdata"."e8_hlth", "recipes_geographicdata"."e8_pub", "recipes_geographicdata"."e_lowwagewk", "recipes_geographicdata"."e_medwagewk", "recipes_geographicdata"."e_hiwagewk", "recipes_geographicdata"."e_pctlowwage", "recipes_geographicdata"."d1a", "recipes_geographicdata"."d1b", "recipes_geographicdata"."d1c", "recipes_geographicdata"."d1c5_ret", "recipes_geographicdata"."d1c5_off", "recipes_geographicdata"."d1c5_ind", "recipes_geographicdata"."d1c5_svc", "recipes_geographicdata"."d1c5_ent", "recipes_geographicdata"."d1c8_ret", "recipes_geographicdata"."d1c8_off", "recipes_geographicdata"."d1c8_ind", "recipes_geographicdata"."d1c8_svc", "recipes_geographicdata"."d1c8_ent", "recipes_geographicdata"."d1c8_ed", "recipes_geographicdata"."d1c8_hlth", "recipes_geographicdata"."d1c8_pub", "recipes_geographicdata"."d1d", "recipes_geographicdata"."d1_flag", "recipes_geographicdata"."d2a_jphh", "recipes_geographicdata"."d2b_e5mix", "recipes_geographicdata"."d2b_e5mixa", "recipes_geographicdata"."d2b_e8mix", "recipes_geographicdata"."d2b_e8mixa", "recipes_geographicdata"."d2a_ephhm", "recipes_geographicdata"."d2c_trpmx1", "recipes_geographicdata"."d2c_trpmx2", "recipes_geographicdata"."d2c_tripeq", "recipes_geographicdata"."d2r_jobpop", "recipes_geographicdata"."d2r_wrkemp", "recipes_geographicdata"."d2a_wrkemp", "recipes_geographicdata"."d2c_wremlx", "recipes_geographicdata"."d3a", "recipes_geographicdata"."d3aao", "recipes_geographicdata"."d3amm", "recipes_geographicdata"."d3apo", "recipes_geographicdata"."d3b", "recipes_geographicdata"."d3bao", "recipes_geographicdata"."d3bmm3", "recipes_geographicdata"."d3bmm4", "recipes_geographicdata"."d3bpo3", "recipes_geographicdata"."d3bpo4", "recipes_geographicdata"."d4a", "recipes_geographicdata"."d4b025", "recipes_geographicdata"."d4b050", "recipes_geographicdata"."d4c", "recipes_geographicdata"."d4d", "recipes_geographicdata"."d4e", "recipes_geographicdata"."d5ar", "recipes_geographicdata"."d5ae", "recipes_geographicdata"."d5br", "recipes_geographicdata"."d5be", "recipes_geographicdata"."d5cr", "recipes_geographicdata"."d5cri", "recipes_geographicdata"."d5ce", "recipes_geographicdata"."d5cei", "recipes_geographicdata"."d5dr", "recipes_geographicdata"."d5dri", "recipes_geographicdata"."d5de", "recipes_geographicdata"."d5dei", "recipes_geographicdata"."d2a_ranked", "recipes_geographicdata"."d2b_ranked", "recipes_geographicdata"."d3b_ranked", "recipes_geographicdata"."d4a_ranked", "recipes_geographicdata"."natwalkind", "recipes_geographicdata"."shape_length", "recipes_geographicdata"."shape_area" FROM "recipes_geographicdata" LIMIT 10000'
    with db.engine.begin() as conn:
        response = conn.exec_driver_sql(sql).all()
    
    return response